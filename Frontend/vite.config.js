import { resolve } from 'path';

export default {
  build: {
    rollupOptions: {
      input: {
        test: resolve(__dirname, 'pages/test.html')
      },
    },
  },
};