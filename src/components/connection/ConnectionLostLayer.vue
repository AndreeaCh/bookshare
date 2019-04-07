<template>
  <div id="connectionLostLayer" v-if="this.isNotConnected()">
    <h3 id="connectionLostText">
      Connection Lost...
    </h3>
  </div>
</template>
<script>
  export default {
    name: 'ConnectionLostLayer',
    methods: {
      isNotConnected () {
        return !this.$store.state.websocket.connected;
      }
    }
  }
</script>
<style src="./connectionLostLayer.css"></style>
