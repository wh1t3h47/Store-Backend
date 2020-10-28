import globals from "../shared/express";

const { paths, app } = globals.globals;

app.get(paths.admin_login, function (req, res) {
  res.send("login");
});
