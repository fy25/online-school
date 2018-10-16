import Vue from "vue";

export default {
    state:{
        token:'',
        user:'',
        store:'',
        pp:'',
    },
    getters:{
        token:state=>{
            let token = state.token;
            if(!token){
                token = sessionStorage.getItem("seller_token");
            }
            return token;
        },
        user:state=>{
            let user = state.user;
            if(!user){
                user = JSON.parse(sessionStorage.getItem("seller_user"));
            }
            return user;
        },
        store:state=>{
            let store = state.store;
            if(!store){
                store = JSON.parse(sessionStorage.getItem("seller_store"));
            }
            return store;
        },
    },
    mutations:{
        setData(state,data){
            state.token = data.token;
            state.user = data.user;
            state.store = data.store;
            sessionStorage.setItem("seller_token",state.token);
            sessionStorage.setItem("seller_user",JSON.stringify(state.user));
            sessionStorage.setItem("seller_store",JSON.stringify(state.store));
        },
        setStore(state,data){
            state.store = data;
            sessionStorage.setItem("seller_store",JSON.stringify(state.store));
        },
        clean(state){
            state.token = '';
            state.user = '';
            state.store = '';
            sessionStorage.clear();
            //localStorage.setItem("seller_token",state.token);
            //localStorage.setItem("seller_user",state.user);
            //localStorage.setItem("seller_store",state.store);

        }
    },
}
