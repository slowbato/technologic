import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, } from 'vite';

export default defineConfig(() => {
	return {
		plugins: [sveltekit()],
		server: {
			proxy: {
				'/anthropic': {
					target: 'https://api.anthropic.com',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/anthropic/, ''),
				},
			},
		},
	};
});
