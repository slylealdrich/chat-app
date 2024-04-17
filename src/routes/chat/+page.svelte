<script lang="ts">
    import type { Chat } from '$lib/types';
    import { io } from 'socket.io-client';

    const socket = io();

    let username = '';
    let message = '';

    function sendMessage() {
        console.log('sent chat');
        socket.emit('new-chat', { username, message } as Chat);
    }
</script>

<form on:submit={sendMessage}>
    <label>
        <p>username</p>
        <input type="text" bind:value={username} />
    </label>
    
    <label>
        <p>message</p>
        <input type="text" bind:value={message} />
    </label>

    <button type="submit">send</button>
</form>
