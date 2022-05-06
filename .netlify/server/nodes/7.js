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
  css: () => css,
  entry: () => entry,
  js: () => js,
  module: () => module2
});
module.exports = __toCommonJS(stdin_exports);
var module2 = __toESM(require("../entries/pages/index.svelte.js"));
const entry = "pages/index.svelte-4759934e.js";
const js = ["pages/index.svelte-4759934e.js", "chunks/index-c3650d4a.js", "pages/AboutMe.svelte-a851a9a1.js", "pages/Articles.svelte-638f15e4.js", "pages/Introduction.svelte-b1b13cef.js", "pages/Navigation.svelte-405a1af3.js", "pages/Projects.svelte-d93f1cf8.js"];
const css = ["assets/pages/index.svelte-94832799.css", "assets/pages/AboutMe.svelte-79d84dd4.css", "assets/pages/Articles.svelte-17345611.css", "assets/pages/Introduction.svelte-223d172c.css", "assets/pages/Navigation.svelte-28e331cd.css", "assets/pages/Projects.svelte-57810988.css"];
