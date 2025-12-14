import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"), // O Vite roda daqui
  
  // ===============================================
  // ALTERAÇÕES CHAVE PARA O DEPLOY (Vercel)
  // ===============================================
  base: '/', // Garante que os caminhos de assets sejam absolutos
  build: {
    outDir: "dist", // CORREÇÃO: O Vercel espera 'dist' (dentro de 'client')
    emptyOutDir: true,
  },
  // ===============================================

  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      // Permite que o Vite busque arquivos fora da pasta 'client'
      allow: [
        path.resolve(import.meta.dirname), // Permite acesso à raiz do projeto (onde está a pasta shared)
      ],
      deny: ["**/.*"],
    },
  },
});
