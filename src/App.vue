<!-- <template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  //
</script> -->

<template>
  <MainButton text="Open alert" @click="() => popup.showAlert('Hello!')" />
</template>

<script lang="ts" setup>
import { MainButton } from 'vue-tg'
import { usePopup } from 'vue-tg/latest'

const popup = usePopup()
</script>