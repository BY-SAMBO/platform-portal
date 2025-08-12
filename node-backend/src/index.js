require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { LogtoExpress } = require('@logto/node');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecretkey123',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Logto SSO middleware
const logtoConfig = {
  appId: process.env.LOGTO_APP_ID,
  appSecret: process.env.LOGTO_APP_SECRET,
  endpoint: process.env.LOGTO_ENDPOINT,
  baseUrl: process.env.LOGTO_REDIRECT_URI.replace('/oauth/oidc/callback', ''),
  redirectUri: process.env.LOGTO_REDIRECT_URI,
  postSignOutRedirectUri: process.env.LOGTO_POST_SIGNOUT_URI
};

const logto = new LogtoExpress(logtoConfig);

// Routes
app.get('/', (req, res) => {
  res.render('login');
});

app.get('/login', logto.handleSignIn(), (req, res) => {});
app.get('/oauth/oidc/callback', logto.handleSignInCallback(), (req, res) => {
  res.redirect('/dashboard');
});

app.get('/logout', logto.handleSignOut(), (req, res) => {});

app.get('/dashboard', logto.requireAuth(), (req, res) => {
  res.render('dashboard', { user: req.user });
});

app.get('/editor', logto.requireAuth(), (req, res) => {
  res.render('editor', { user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
