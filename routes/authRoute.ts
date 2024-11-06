import express from "express";
import passport from 'passport';
import { forwardAuthenticated } from "../middleware/checkAuth";

const router = express.Router();

// declare module 'express-session' {
//   interface SessionData {
//     messages: []
//   }
// }

router.get("/login", forwardAuthenticated, (req, res) => {
  res.render("login", { messages: req.flash("error") });
})

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    failureFlash: true,
    /* FIX ME: 😭 failureMsg needed when login fails */
  }),
  function (req, res, next) {
    console.log('sdasdasda');
    res.redirect("/");
  }
);


router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/auth/login" }),
  function (req, res) {
    // This function will only be called on successful authentication
    res.redirect("/dashboard");
  }
);

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
  });
  res.redirect("/auth/login");
});

const errorRedirect = (err: any, req: any, res: any, next: any) => {
  res.redirect('/');
}

router.get('/register', (req, res) => {  
  res.render('register');
}
);

router.post('/register', (req, res) => {
  res.send('User created');
});

export default router;
