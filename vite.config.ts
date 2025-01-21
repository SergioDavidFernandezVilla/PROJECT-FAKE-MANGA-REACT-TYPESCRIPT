import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/manga/scan': 'https://3000-idx-webscrappingmanga-1737347509099.cluster-rhptpnrfenhe4qarq36djxjqmg.cloudworkstations.dev',
    },
  },
});
