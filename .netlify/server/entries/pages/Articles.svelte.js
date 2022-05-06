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
  default: () => Articles
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
var Articles_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1h1gxqj{height:100vh;background-color:#87D8E0;scroll-snap-align:start;display:grid;align-items:center}",
  map: null
};
const Articles = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"articles"}" class="${"svelte-1h1gxqj"}">Articles
</section>`;
});
