import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import pack from "./package.json";

const deps = Object.keys(pack.dependencies).filter(x => !x.includes("@lexical/react")) as (keyof typeof pack.dependencies)[];

const map = deps.reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {} as Record<keyof typeof pack.dependencies, string>);

function get(name: keyof typeof pack.dependencies) {
  const result = map[name];
  delete map[name];
  return result;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
    reportCompressedSize: false,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: [get("react"), get("react-dom")],
          lexical: deps.filter(x => x.includes("lexical")).map(x => get(x)),
          components: [get("@fluentui/react-components")],
          fluentui: [get("@fluentui/react-icons"), get("@fluentui/react-hooks"), get("@griffel/react")],
          signalr: [get("@microsoft/signalr"), get("@microsoft/signalr-protocol-msgpack")],
          rx: [get("dexie"), get("dexie-react-hooks"), get("rxjs")],
          tools: [get("ahooks"), get("dayjs"), get("lodash-es"), get("react-helmet"), get("react-responsive-carousel")],
          vendor: Object.values(map),
        },
      },
    }
  },
});
