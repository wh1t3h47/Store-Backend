import globals from "./shared/express";
const { app, port } = globals.globals;

app.listen(port, function () {
  console.log("App is listening on port 3000!");
});
