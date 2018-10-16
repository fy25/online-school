import {Base} from "@/utils/base";

class Auth{
    //播图接口
    constructor(){
        this.base = Base;
    }
    getToken(data){
        return new Promise((resolve,reject)=>{
            this.base.get('api/Auth/getToken',data).then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            });
        }); 
    }
}

export default Auth;