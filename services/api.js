import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://tqotwisxcspaoylermat.supabase.co/rest/v1/',
    headers: {
        apikey: "SUPABASE_KEY",
        authorization: "Bearer SUPABASE_KEY"
    }
})