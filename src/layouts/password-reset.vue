<template>
    <v-app-bar :elevation="2" color="black">
        <v-btn icon="mdi-arrow-left" href="/account">
        </v-btn>
    </v-app-bar>
    <v-main>
        <v-alert v-if="passwordUpdated" title="Password successfully updated" type="success">
        </v-alert>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field type="password" v-model="password" :readonly="loading" :rules="[required]"
                    label="Password" placeholder="Enter your password" clearable></v-text-field>

                <v-text-field type="password" v-model="passwordConfirmation" :readonly="loading"
                    :rules="[required, passwordConfirmed]" label="Confirm Password" placeholder="Confirm your password"
                    clearable></v-text-field>

                <br />

                <v-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit"
                    variant="elevated" block>
                    Sign In
                </v-btn>
            </v-form>
        </v-card>
    </v-main>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { useUserStore } from '@/stores/app';

const form = ref(false);
const password = ref("");
const passwordConfirmation = ref("");
const loading = ref(false);
const user = useUserStore();
const passwordUpdated = ref(false);

function required(v: any) {
    return !!v || "Field is required";
}
function passwordConfirmed(v: any) {
    return (
        (!!v && password.value == passwordConfirmation.value) ||
        "Password don't match"
    );
}

function onSubmit(event: Event) {
    loading.value = true
    try {
        user.registerUser(password.value, passwordConfirmation.value)
        passwordUpdated.value = true
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
        // if (passwordUpdated.value == true) {
        //     router.push("/home")
        // }
    }
}
</script>