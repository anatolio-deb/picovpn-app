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
import { retrieveRawInitData, parseInitDataQuery } from '@telegram-apps/sdk';
const username = ref('');

onMounted(() => {
  let rawInitData = retrieveRawInitData();
  if (rawInitData != undefined) {
    let initData = parseInitDataQuery(rawInitData)
    username.value = initData.user?.username || ""
  }
})

// {
//   user: {
//     id: 99281932,
//     firstName: 'Andrew',
//     lastName: 'Rogue',
//     username: 'rogue',
//     languageCode: 'en',
//     isPremium: true,
//     allowsWriteToPm: true,
//   },
//   hash: 'abcedef123',
//   authDate: Date(1716922846000),
//   startParam: 'debug',
//   chatType: 'sender',
//   chatInstance: '8428209589180549439',
// };
</script>

<template>
  {{ username }}
</template>