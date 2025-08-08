<template>
    <appBar>
    </appBar>
    <v-main>
        <v-container>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-card-text>
                            <div>VPN Username</div>

                            <p class="text-h4 font-weight-black">{{ plan.plan.user.telegramUsername }}</p>

                            <p>{{ plan.daysLeft }} days left</p>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="deep-purple-accent-4" text="Upgrade" variant="text" @click="onClick"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mx-auto">
                        <v-list>
                            <v-list-subheader>Servers</v-list-subheader>

                            <v-list-item v-for="(item, i) in daemons.daemonsData" :key="i" :value="item"
                                color="primary">
                                <v-list-item-title v-text="item.address"></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto" href="https://apps.apple.com/us/app/cisco-secure-client/id1135064690"
                        prepend-icon="mdi-apple" rel="noopener" subtitle="Available for download" target="_blank"
                        title="App Store">
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mx-auto"
                        href="https://play.google.com/store/apps/details?id=com.cisco.anyconnect.vpn.android.avf&hl=en"
                        prepend-icon="mdi-google-play" rel="noopener" subtitle="Available for download" target="_blank"
                        title="Google Play">
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script setup lang="ts">
import router from '@/router';
import { usePlanStore, useDaemonStore, useUserStore } from '@/stores/app';
import { useTonConnectModal } from '@townsquarelabs/ui-vue';
import {
    useTonWallet,
    useTonAddress,
    useTonConnectUI
} from "@townsquarelabs/ui-vue";
import { retrieveRawInitData, parseInitDataQuery } from '@telegram-apps/sdk';


// import { TonConnectUI } from '@tonconnect/ui'

// const tonConnectUI = new TonConnectUI({
//     manifestUrl: 'https://github.com/nikiforidi/picovpn-app/blob/e11ecb96321424ded84cdf0e1316488b26582dac/tonconnect-manifest.json',
//     buttonRootId: 'upgrade'
// });

const plan = usePlanStore()
const daemons = useDaemonStore()
const user = useUserStore()
const wallet = useTonWallet();
const { state, open, close } = useTonConnectModal();


onMounted(() => {
    let rawInitData = retrieveRawInitData();
    if (rawInitData != undefined) {
        try {
            const initData = parseInitDataQuery(rawInitData)
            user.fetchUser(initData.user?.username).then((response) => {
                if (response.status === 200) {
                    router.push("/account");
                } else {
                    router.push("/register")
                }
            }).catch((error) => {
                console.error(error);
            });
        } catch (e) {
            console.error(e)
        }
    }
})

function onClick(event: Event) {
    if (wallet.value == null) {
        open()
    } else {
        router.push("/buy")
    }
}
</script>
