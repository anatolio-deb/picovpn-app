<template>
  <v-app>
    <back-button></back-button>
    <!-- <router-view /> -->
  </v-app>
</template>

<script lang="ts" setup>
import { init, backButton } from '@telegram-apps/sdk';

// Init the package and actualize all global dependencies.
init();

// Mount the back button component and retrieve its actual
// state.
backButton.mount();

// When a user clicked the back button, go back in the
// navigation history.
const off = backButton.onClick(() => {
  off();
  window.history.back();
});
</script>
