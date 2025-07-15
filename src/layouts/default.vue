<!-- <template>
  <v-main>
    <home></home>
    <router-view />
  </v-main>

</template>

<script lang="ts" setup>
import home from "@/layouts/home.vue";

</script> -->

<script setup lang="ts">
/**
 * Component which opens native Telegram Popup.
 */
import { popup } from '@telegram-apps/sdk-vue'

const props = defineProps<{ title: string, message: string }>()

function open() {
  if (popup.isSupported()) {
    popup.show(props);
    return;
  }

  // Open fallback HTML dialog...
}
</script>

<template>
  <button aria-haspopup="dialog" @click="open">
    Open popup
  </button>
</template>