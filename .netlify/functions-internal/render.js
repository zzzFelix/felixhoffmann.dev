const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["astronaut.gif","astronaut.json","favicon.png"]),
	mimeTypes: {".gif":"image/gif",".json":"application/json",".png":"image/png"},
	_: {
		entry: {"file":"start-6b58e809.js","js":["start-6b58e809.js","chunks/index-c3650d4a.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "AboutMe",
				pattern: /^\/AboutMe\/?$/,
				names: [],
				types: [],
				path: "/AboutMe",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "Articles",
				pattern: /^\/Articles\/?$/,
				names: [],
				types: [],
				path: "/Articles",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "Introduction",
				pattern: /^\/Introduction\/?$/,
				names: [],
				types: [],
				path: "/Introduction",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "Navigation",
				pattern: /^\/Navigation\/?$/,
				names: [],
				types: [],
				path: "/Navigation",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "Projects",
				pattern: /^\/Projects\/?$/,
				names: [],
				types: [],
				path: "/Projects",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
