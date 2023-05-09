export default {
  common: ["button_ok", "button_cancel"],
  hello: ["welcome"],
  userAction: ["profile", "logOut"],
  settingActions: ["title", "language", "theme", "currancy"],
  login: [
    "username",
    "password",
    "username_required",
    "password_required",
    "login",
    "forgot_password",
    "register",
  ],
  theme: ["light", "dark"],
} as const;
