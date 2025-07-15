<template>
    <v-app-bar :elevation="2" color="black">
        <v-btn icon="mdi-arrow-left" href="/account">
        </v-btn>
    </v-app-bar>
    <v-alert v-if="sent" title="Thank you!" text="Will contact you asap in the bot" type="success">
    </v-alert>
    <v-main>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-textarea label="Contact support" name="input-7-1" variant="filled" auto-grow v-model="text"
                    :rules="[!isEmpty]">
                </v-textarea>

                <br />

                <v-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit"
                    variant="elevated" block>
                    Submit
                </v-btn>
            </v-form>
        </v-card>
    </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/app';


const user = useUserStore()
const text = ref("")
const loading = ref(false);
const form = ref(false);
const sent = ref(false);

function isEmpty(v: any) {
    return v.length == 0;
}

function onSubmit(event: Event) {
}

</script>