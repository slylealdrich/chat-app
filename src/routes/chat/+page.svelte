<script lang="ts">
    import type { Chat } from '$lib/types';
    import { io } from 'socket.io-client';

    const socket = io();

    let username = '';
    let message = '';

    function sendMessage() {
        socket.emit('new-chat', { username, message } as Chat);
    }
</script>

<form on:submit={sendMessage}>
    <label>
        <p>username</p>
        <input class="border" type="text" bind:value={username} />
    </label>
    
    <label>
        <p>message</p>
        <input class="border" type="text" bind:value={message} />
    </label>

    <button class="bg-blue-200" type="submit">send</button>
</form>
