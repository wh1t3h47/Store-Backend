import express = require("express");
const app = express();

interface express_paths {
  admin_login: string;
  admin_register: string;
}

interface express_globals {
  app: express.Application;
  port: number;
  paths: express_paths;
}

const path_list: express_paths = {
  admin_login: "/admin/login",
  admin_register: "/admin/register",
};

const globals: express_globals = {
  app: app,
  port: 80,
  paths: path_list,
};

export default {
  globals,
};
