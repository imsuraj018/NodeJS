

require("dotenv").config();


const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");


const app = express();


// Google OAuth strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3001/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            done(null, profile);
        }
    )
);


app.use(passport.initialize());


// Login with Google
app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);


// Google sends the user back here
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/"
    }),
    (req, res) => {
        const token = jwt.sign(
            {
                id: req.user.id,
                name: req.user.displayName
            },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );


        res.send(`
            <h2>Google Login Successful!</h2>
            <p>Your JWT token:</p>
            <textarea rows="8" cols="70">${token}</textarea>
            <p>Copy this token for the next step.</p>
        `);
    }
);


// Verify JWT
app.get("/profile", (req, res) => {
    const auth = req.headers.authorization;


    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).send("Token missing");
    }


    try {
        const token = auth.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);


        res.json({
            message: "Protected profile accessed",
            user: user
        });
    } catch (error) {
        res.status(401).send("Invalid or expired token");
    }
});


app.get("/", (req, res) => {
    res.send('<a href="/auth/google">Login with Google</a>');
});


app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});
