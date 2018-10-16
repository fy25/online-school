
<template lang="html">
    <div class="profile_box" v-if="show==1">
        <div class="head inner fs28">
            <div class="userImg"><img src="http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg" alt=""/></div>
            <div class="userInfo">
                <span>佳佳</span>
                <router-link to="/profile/apply"><span class="span">成为教师</span></router-link>
            </div>
            <router-link to="/profile/set"><i class="iconfont icon-shezhi setUp"></i></router-link>
        </div>
        <div class="top_li bf fs28">
            <router-link to="" class="li"><i class="iconfont icon-shoucang1 ia"></i><span>我的收藏</span></router-link>
            <div class="line"></div>
            <router-link to="" class="li"><i class="iconfont icon-shoucang1 ib"></i><span>我的订单</span></router-link>
            <div class="line"></div>
            <router-link to="" class="li"><i class="iconfont icon-shoucang1 ic"></i><span>我的足迹</span></router-link>
        </div>
        <div class="bot_li bf fs28">
            <router-link to="" class="li inner"><i class="iconfont icon-kecheng2 ia"></i><span>我的课程</span><i class="iconfont icon-right ir"></i></router-link>
            <router-link to="" class="li inner"><i class="iconfont icon-luntan ib"></i><span>我的论坛</span><i class="iconfont icon-right ir"></i></router-link>
            <router-link to="" class="li inner"><i class="iconfont icon-kecheng2 ic"></i><span>绑定手机</span><i class="iconfont icon-right ir"></i></router-link>
            <router-link to="" class="li inner"><i class="iconfont icon-kecheng2 id"></i><span>分享中心</span><i class="iconfont icon-right ir"></i></router-link>    
        </div>
        <div class="guess_lesson bf inner">
            <strong class="fs32">猜你喜欢</strong>
            <lesson></lesson>
        </div>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<style lang="less" scoped>
    @background: #f2f2f2; 
    .profile_box{
        background-color: @background;
        padding-bottom: 60px;
    }  
    .head{
        width: 100%;
        height: .2rem;
        background:url('https://edu-1257143824.cos.ap-shanghai.myqcloud.com/online-school/a681f2af0718118e8b5a5e79afb7.jpg') no-repeat;
        background-size:cover; 
        height: 3rem;
        display: flex;
        flex-direction: row;
        color: #fff;
        padding-top: .7rem;
        position: relative;
        .userImg{
            width: 1.1rem;
            height: 1.1rem;
            margin-right: .3rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .userInfo{
            display: flex;
            flex-direction: column;
            span{
                display: block;
                height: .5rem;
                line-height: .5rem;
                color: #fff;
            }
            .span{
                padding: 0 .1rem;
                background: #d7ba8c;
                border-radius: 15px;
            }
        }
        .setUp{
            color: #fff;
            font-size: 36px;
            position: absolute;
            right: .44rem;
            top: .52rem;
        }
    }
    .top_li{
        position:absolute;
        width: 88%;
        padding: .45rem 0;
        border-radius: 8px;
        top: 2.2rem;
        left: 6%;
        box-shadow:0 2px 10px rgba(34, 25, 25, 0.4);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .li{
            display: flex;
            flex-direction: column;
            align-items: center;
            i{
                font-size: 24px;
            }
            .ia{
                color: #e55d13;
            }
            .ib{
                color: #e84b4b;
            }
            .ic{
               color: #efb53c; 
            }
        }
        .line{
            width: 1px;
            height: .9rem;
            background: #eee;
        }
        span{
            display: inline-block;
            margin-top: .24rem;
            color: #000;
        }
    }
    .bot_li{
        padding-top: 1.2rem;
        .li{
            line-height: .98rem;
            display: block;
            border-bottom: 1px solid #eee;
            span{
                color: #000;
            }
            i{
                margin-right: .24rem;
                font-size: 24px;
            }
            .ia{
                color: #2db7f5;
            }
            .ib{
                color: #e27d88;
            }
            .ic{
               color: #ff7800; 
            }
            .id{
               color: #24aa7d; 
            }
            .ir{
                float: right;
                font-size: 18px;
            }
        }
    }
    .guess_lesson{
        margin: .3rem 0;
        padding-bottom: .3rem;
        strong{
            line-height: .9rem;
            display: block;
        }
    }
</style>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import Footer from "../../common/Footer";
import lesson from "../../components/lesson";
export default {
    data(){
        return{
            demo1: '未发货',
            value: '',
            show:1
        }
    },
    components: {
        Footer,
        lesson,
    },
    methods: {
        // test(e) {
        //     console.log(e)
        //     this.$router.push({name: "abcde", param: {
        //         id: 1
        //     }});           
        // }
    }
};

</script>

