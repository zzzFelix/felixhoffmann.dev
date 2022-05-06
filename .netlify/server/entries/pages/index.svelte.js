var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
var import_AboutMe_svelte = __toESM(require("./AboutMe.svelte.js"));
var import_Articles_svelte = __toESM(require("./Articles.svelte.js"));
var import_Introduction_svelte = __toESM(require("./Introduction.svelte.js"));
var import_Navigation_svelte = __toESM(require("./Navigation.svelte.js"));
var import_Projects_svelte = __toESM(require("./Projects.svelte.js"));
var import_lottie_web = require("lottie-web");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'html{scroll-snap-type:y mandatory}body{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";margin:0;color:#1B1B1C}',
  map: null
};
const Routes = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_5f038599.v)(import_Navigation_svelte.default, "Navigation").$$render($$result, {}, {}, {})}
<main>${(0, import_index_5f038599.v)(import_Introduction_svelte.default, "Introduction").$$render($$result, {}, {}, {})}
	${(0, import_index_5f038599.v)(import_AboutMe_svelte.default, "AboutMe").$$render($$result, {}, {}, {})}
	${(0, import_index_5f038599.v)(import_Projects_svelte.default, "Projects").$$render($$result, {}, {}, {})}
	${(0, import_index_5f038599.v)(import_Articles_svelte.default, "Articles").$$render($$result, {}, {}, {})}
</main>`;
});
