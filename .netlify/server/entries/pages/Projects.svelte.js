var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Projects
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
var Projects_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-17b484p{height:100vh;background-color:#70EFB2;scroll-snap-align:start;display:grid;align-items:center}",
  map: null
};
const Projects = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"projects"}" class="${"svelte-17b484p"}">Projects
</section>`;
});
