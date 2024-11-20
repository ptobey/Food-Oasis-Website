import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
//import { pluginBasicSsl } from '@rsbuild/plugin-basic-ssl'

export default defineConfig({
  html: {
    title: 'Food Oasis Website',
    favicon: './public/newLogo.png'
  },
  plugins: [pluginReact()],
});