<script lang="ts">
    import type { Chat } from '$lib/types';
    import { io } from 'socket.io-client';

    const socket = io();

    let chats: Chat[] = [];

    socket.on('new-chat', (chat: Chat) => {
        console.log('received chat');
        chats = [...chats, chat];
    });
</script>

{#each chats as chat}
    <p>{chat.username}: {chat.message}</p>
{/each}
