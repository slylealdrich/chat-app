<script lang="ts">
    import type { Chat } from "$lib/types";
    import { io } from "socket.io-client";

    const socket = io();

    let chats: Chat[] = [];

    socket.on("new-chat", (chat: Chat) => {
        console.log("received chat");
        chats = [...chats, chat];
    });
</script>

<div class="h-full grid grid-rows-16 auto-rows-min">
    {#each chats.slice(-16) as chat}
        <div class="row-span-1">
            <span class="text-purple-500 font-bold text-lg">
                {chat.username}
            </span>
            <span class="text-white text-lg">: {chat.message}</span>
        </div>
    {/each}
</div>
