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
  default: () => Navigation
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
var Navigation_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1qbqgo7{position:fixed;text-align:right;padding:3rem;width:calc(100% - 3rem - 3rem)}a.svelte-1qbqgo7:first-of-type{grid-column-start:2}a.svelte-1qbqgo7{font-weight:600;font-size:1rem;line-height:160%;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;color:#1B1B1C;margin:1.5rem}",
  map: null
};
const Navigation = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-1qbqgo7"}"><a href="${"#about"}" class="${"svelte-1qbqgo7"}">About me</a>
	<a href="${"#projects"}" class="${"svelte-1qbqgo7"}">Projects</a>
	<a href="${"#articles"}" class="${"svelte-1qbqgo7"}">Articles</a>
</nav>`;
});
