import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

function serveBrandPlugin(): Plugin {
  return {
    name: 'serve-brand',
    configureServer(server) {
      server.middlewares.use('/brand', (req, res, next) => {
        const cleanUrl = (req.url || '').split('?')[0];
        const filePath = path.join(process.cwd(), 'brand', decodeURIComponent(cleanUrl));
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          const mimeTypes: Record<string, string> = {
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.txt': 'text/plain',
          };
          res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
          fs.createReadStream(filePath).pipe(res);
          return;
        }
        next();
      });
    },
    closeBundle() {
      const srcDir = path.join(process.cwd(), 'brand');
      const destDir = path.join(process.cwd(), 'dist', 'brand');
      if (fs.existsSync(srcDir)) {
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        const files = fs.readdirSync(srcDir);
        for (const file of files) {
          const srcFile = path.join(srcDir, file);
          const destFile = path.join(destDir, file);
          if (fs.statSync(srcFile).isFile()) {
            fs.copyFileSync(srcFile, destFile);
          }
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    serveBrandPlugin()
  ],
  server: {
    port: 3000,
    host: true
  }
});
