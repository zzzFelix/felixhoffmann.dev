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
  default: () => Introduction
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
var import_lottie_web = require("lottie-web");
var Introduction_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-chrqh2{height:100vh;background-color:#e2c0d1;scroll-snap-align:start;display:grid;grid-template-columns:auto 25rem 25rem auto;grid-template-rows:7.6rem 1fr 5fr 7.6rem}article.svelte-chrqh2{grid-column-start:2;grid-row-start:3;justify-self:start}#astronaut.svelte-chrqh2{grid-row-start:3;grid-column-start:3;justify-self:end;width:80%;max-width:20rem;margin-top:-9%;align-self:start}h1.svelte-chrqh2,p.svelte-chrqh2{margin:0;color:#04294f;text-transform:uppercase;font-size:2rem;line-height:150%;letter-spacing:0.1em}h1.svelte-chrqh2{align-self:end;font-style:normal;font-weight:600}p.svelte-chrqh2{font-weight:300}span.svelte-chrqh2{grid-row-start:4;grid-column-start:2;grid-column-end:4;justify-self:center;align-self:center;text-align:center;margin:3rem;font-weight:600;font-size:1rem;line-height:160%;letter-spacing:0.1em;text-transform:uppercase}",
  map: null
};
const Introduction = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-chrqh2"}"><article class="${"svelte-chrqh2"}"><h1 class="${"svelte-chrqh2"}">Felix Hoffmann</h1>
		<p class="${"svelte-chrqh2"}">Software Engineer</p></article>
	<div id="${"astronaut"}" class="${"svelte-chrqh2"}"></div>
	<span class="${"svelte-chrqh2"}">Scroll down</span>
</section>`;
});
