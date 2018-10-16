import {Base} from "../../utils/base";

class Index{
    //播图接口
    constructor(){
        this.base = Base;
    }
    slide(){
        return new Promise((resolve,reject)=>{
            this.base.get('api/Slide/SlideList',{}).then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            });
        }); 
    }
}

export default Index;