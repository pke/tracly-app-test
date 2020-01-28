"use strict"
require("dotenv").config()

module.exports = {
  tags: {
    allowUnknownTags: true,
  },
  source: {
    "include": ["./src/hooks"],
  },
  plugins: [
    "plugins/markdown",
    "better-docs/component",
  ],
  opts: {
    encoding: "utf8",
    destination: "public/docs/",
    recurse: true,
    verbose: true,
    //template: "./node_modules/better-docs",
  },
  templates: {
    "better-docs": {
      name: `${process.env.PRODUCT_NAME} React components`,
    },
  },
}
