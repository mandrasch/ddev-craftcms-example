// https://github.com/thomasbendl/craft4-ddev-vite-blueprint/blob/main/vite.config.js
// (removed criticalcss config, keep it simple by now)

import liveReload from "vite-plugin-live-reload";
import legacy from "@vitejs/plugin-legacy";
// TODO: is this needed in all cases?
import viteCompression from "vite-plugin-compression";

export default ({ command }) => ({
	base: command === "serve" ? "" : "/dist/",
	css: { preprocessorOptions: { scss: { charset: false } } },
	build: {
		manifest: true,
		outDir: "./web/dist/",
		rollupOptions: {
			input: {
				app: "./src/js/app.ts",
			},
		},
	},
	server: {
		host: '0.0.0.0',
		port: 3000
	},
	plugins: [
		liveReload("./templates/**/*"),
		legacy({
			targets: ["defaults"],
			additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
		}),
		viteCompression(),
	],
});