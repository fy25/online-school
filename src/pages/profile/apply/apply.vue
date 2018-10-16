<template lang="html">
    <div class="apply_box fs28">
        <group>
            <x-input title="姓名 " name="username" placeholder="请输入真实姓名" is-type="china-name"></x-input>
            <x-input title="手机号" name="mobile" placeholder="请输入手机号" keyboard="number" is-type="china-mobile"></x-input>
            <x-input title="验证码" placeholder="请输入获取的验证码" class="weui-vcode">
                <x-button slot="right" class="getpassword">获取验证码</x-button>
            </x-input>
            <cell title='擅长' :link="{path:'/profile/set'}"></cell>
            <cell title='资格证' :link="{path:'/profile/set'}"></cell>
        </group>
        <check-icon :value.sync="isSeclected" class="check_box">同意</check-icon><span class="main-color" @click='show = !show'>用户服务协议</span>
       
            <x-switch v-model="showHideOnBlur" title="111"></x-switch>
            <transition name="fade">
                <div v-if="show" class="mode_box">
                    <div class='mode'></div>
                    <div class="mode_info">wwwwww</div>
                    <span @click="show=false">确定</span>
                </div>
            </transition>

        <x-button action-type="button" class="sub_btn">提交申请</x-button>
    </div>
</template>
 
<style lang="less" scoped>
    @background: #f2f2f2;   
    .apply_box{
        background-color:@background;
    }
    .getpassword{
        color: #4ac9c0;
        border-left: 1px solid #eee;
    }
    .sub_btn{
        background: #4ac9c0;
        color: #fff;
        width: 6.9rem;
        height: .8rem;
        line-height: .8rem;
        border-radius: 8px;
        border: none;
        margin-top: 1rem;
    }
    .weui-btn:after{
        border: none;
    }
    .check_box{
        color: #999;
        line-height: .98rem;
    }
    .fade-enter,.fade-leave-active{
        opacity: 0;
        transform: translate3d(0,20%,0);
    }
    .fade-enter-active,.fade-leave-active{
        transition: all .5s cubic-bezier(0.4,0,0,1.5);
    }
    .mode_box{
        position: relative;
        width: 100%;
        height: 100%;
        .mode{
            position: absolute;
            width: 100%;
            height: 100%;
            background: pink;
        }
    }
</style>
<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import { Group, XInput,Cell, CheckIcon, XButton,XDialog ,XSwitch } from 'vux';

export default {
    data(){
        return {
         isSeclected: false,
         showHideOnBlur: false,
         show:false
        }
    },
    components: {
       Group,
       XInput,
       Cell,
       CheckIcon,
       XButton,
       XDialog,
       XSwitch,
    },
    methods: {
        onClick () {
            console.log('on click')
        },
        doShowToast () {
            this.$vux.toast.show({
                text: 'toast'
            })
        }
    }
};

</script>