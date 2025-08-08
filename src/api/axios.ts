import axios from "axios"
// import { init, retrieveRawInitData } from "@telegram-apps/sdk";


interface UserData {
    password: string | null,
    password_confirmation: string | null,
}

export interface Plan {
    months: number;
    price: number;
    boc: string;
    comment: string;
}

export interface Daemon{
    address: string
}

class ApiService {
    private axiosInstance;
    // private initData: string | null = null;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://picovpn.ru/api",
            timeout: 10000,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    // setInitData(initData: string) {
    //     this.initData = initData;
    // }

    // private getAuthHeader() {
    //     return this.initData
    //         ? { Authorization: `X-Telegram-Data ${this.initData}` }
    //         : {};
    // }

    postUser(data: UserData) {
        return this.axiosInstance.post("/users", data);
    }

    // telegramAuth() {
    //     return this.axiosInstance.post("/auth", null, {
    //         headers: this.getAuthHeader()
    //     });
    // }

    async getUser(username: string|undefined) {
        return await this.axiosInstance.get("/users", {
            params:{
                'username':username
            }
        });
    }

    // isAuthenticated(): boolean {
    //     return !!this.initData;
    // }

    passwordReset(data: UserData) {
        return this.axiosInstance.post("/password-reset", data);
    }

    getPlan(){
         return this.axiosInstance.get("/plans");
    }

    getDaemons(){
        return this.axiosInstance.get("/daemons");
    }

    planUpdate(data: Plan){
        return this.axiosInstance.post("/plans", data);
    }
}

const apiService = new ApiService();
// try {
//     const initData = retrieveRawInitData() || "";
//     apiService.setInitData(initData);
// } catch (error){
//     console.error(error)
// }
export default apiService;