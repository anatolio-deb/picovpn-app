// Utilities
import { defineStore } from 'pinia'
import moment from 'moment';
import apiService, { type Daemon } from '@/api/axios';
import { type Plan } from "@/api/axios";


export const useUserStore = defineStore('users', {
  state: () => ({
    userData:{
      id: "",
      username: "",
      photo_url: "",
      is_bot: false,
      first_name: "",
      last_name: "",
      language_code: "",
      is_premium: false,
    },
    chatInstance: Number,
  }),
  getters:{
    initials: (state) => (state.userData.first_name.charAt(0) + state.userData.last_name.charAt(0)).toUpperCase(),
    fullName: (state) => `${state.userData.first_name} ${state.userData.last_name}`.trim(),
    // authenticated: (state)=> state.userData.id != "" && state.userData.username != ""
  },
  actions:{
    registerUser(password1: string, password2: string){
      return apiService.postUser({
        password: password1,
        password_confirmation: password2
    })
    },
    async fetchUser(){
       return await apiService.getUser()
    },
    async telegramAuth(){
      return await apiService.telegramAuth()
    }
  }
})

export const usePlanStore = defineStore('plan', {
  state: ()=>({
    plan:{
      userId: "",
      user: {
        telegramUsername: "",
        telegramId:""
      },
      expiresAt: ""
      }
  }),
  getters:{
    daysLeft:(state)=>(moment(Date.parse(state.plan.expiresAt)).diff(Date.now(), 'days'))
  },
  actions:{
    fetchPlan(){
      apiService.getPlan()
        .then((response) => {
            if (response.status === 200) {
                this.plan = response.data
            } else {
                throw new Error(response.data.message);
            }
        })
    },
    updatePlan(plan: Plan){
      apiService.planUpdate(plan).then((response) => {
            if (response.status === 200) {
                this.plan = response.data
            } else {
                throw new Error(response.data.message);
            }
        })
    }
  }
})

export const useDaemonStore = defineStore('daemons', {
  state:()=>({
    daemonsData: [] as Daemon[],
  }),
  actions:{
    fetchDaemons(){
     apiService.getDaemons()
        .then((response) => {
            if (response.status === 200) {
                this.daemonsData = response.data
            } else {
                throw new Error(response.data.message);
            }
        })
    }
  }
})

