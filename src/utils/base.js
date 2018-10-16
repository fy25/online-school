import {post, get, put,del} from "./axios.js";
const Base = {
    get(url,data){
        return get(url,data);
    },
    post(url,data){
        return post(url,data);
    },
    put(url,data){
        return put(url,data);
    },
    del(url,data){
        return del(url,data);
    }
}

export {Base};