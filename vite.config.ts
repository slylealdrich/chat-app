import type { Chat } from '$lib/types';
import { sveltekit } from '@sveltejs/kit/vite';
import { Server } from 'socket.io';
import { defineConfig, type ViteDevServer } from 'vite';

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.on('new-chat', (chat: Chat) => {
				console.log('received new chat: ', chat);
				socket.broadcast.emit('new-chat', chat);
			});
		});
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
