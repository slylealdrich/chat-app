import { sveltekit } from '@sveltejs/kit/vite';
import { Server } from 'socket.io';
import { defineConfig, type ViteDevServer } from 'vite';

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.emit('new-connection', 'new connection established');
		});
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
