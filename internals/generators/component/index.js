/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "A stateless function",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      }
    },
    {
      type: "confirm",
      name: "wantStyledComp",
      default: true,
      message: "Do you want this to be a styled component?"
    },
    {
      type: "confirm",
      name: "memo",
      default: false,
      message: "Do you want to wrap your component in React.memo?"
    }
  ],
  actions: data => {
    // Generate index.js and index.test.js
    let componentTemplate = "./component/stateless.js.hbs";
    const styledComponentTemplate = "./component/styledComponent.js.hbs";

    const actions = [
      {
        type: "add",
        path: "../../src/components/{{properCase name}}/index.js",
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: "add",
        path:
          "../../src/components/{{properCase name}}/__tests__/{{camelCase name}}.test.js",
        templateFile: "./component/test.js.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../src/components/{{properCase name}}/Readme.md",
        templateFile: "./component/readme.md.hbs",
        abortOnFail: true
      }
    ];

    // If they want a styled component
    if (data.wantStyledComp) {
      actions.push({
        type: "add",
        path:
          "../../src/components/{{properCase name}}/styledComponents/styled{{ properCase name }}.js",
        templateFile: styledComponentTemplate,
        abortOnFail: true
      });
    }

    actions.push({
      type: "prettify",
      path: "/components/"
    });

    return actions;
  }
};
