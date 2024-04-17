<script lang="ts">
    import { io } from 'socket.io-client';

    const socket = io();

    socket.on("new-connection", (message) => {
        console.log(message);
    });
</script>
