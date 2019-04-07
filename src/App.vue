<template>
  <div id="app">
    <router-view/>
    <!-- <ConnectionLostLayer></ConnectionLostLayer> -->
  </div>
</template>

<script>
import Vue from "vue";
import A from "./constants/actions";
import ConnectionLostLayer from "./components/connection/ConnectionLostLayer.vue";
import WebsocketSubscribe from "./contracts/websocketSubscribe";

export default {
  name: "App",
  components: {
    ConnectionLostLayer
  },
  beforeMount: function() {
    console.log("App.vue mounted");
    //this.$store.dispatch(A.WEBSOCKET_CONNECT);
  },
  mounted: function() {
    console.log("application mounted");
  }
};
</script>
<style src="./app.css"></style>
