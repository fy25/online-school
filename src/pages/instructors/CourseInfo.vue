<template lang="html">
  <div class='info'>
            <img :src="pathname" alt="">
         
                <div class="detail">
                    <div class="left">
                        <div class="title">
                            {{cname}}
                        </div>
                        <div class="row-2nd">
                            <span class="price">￥{{price}}</span>
                            <span class="study"><span class="num-students">{{xynum}}</span>人已学习</span>
                            <span class="collect"><i class="iconfont icon-shoucang2 sc"></i><span>收藏</span></span>
                        </div>
                    </div>
                    <span class="buy-btn">购买课程</span>
                </div>
                
        <div class="teacher">
            <div class="avatar"  @click="goInfo(id)"> 
                <img :src="avatar">
            </div>
            <div class="user_nicename" @click="goInfo(id)">
                <div class="un-row1">{{user_nicename}} </div>
                <div class="un-row2">如花纹绣金牌纹绣讲师</div>
            </div>
            <span class="bookmark-btn">已收藏</span>
        </div>
        <div class="pane">
            <div class="tab-switch">
                <div class="tab" @click="switchTab(0)">
                    目录
                    <div class="fatty" v-show="tabIdx == 0"></div>
                </div>
                <div class="tab" @click="switchTab(1)">
                    详情
                    <div class="fatty" v-show="tabIdx == 1"></div>
                </div>
                <div class="tab" @click="switchTab(2)">
                    评价
                    <div class="fatty" v-show="tabIdx == 2"></div>
                </div>
            </div>
            <div class="sub-pane">
                <div v-show="tabIdx == 0" class="intro">
                    <div v-for="hour in hours">
                        <li>{{hour.name}}</li>
                    </div>
                </div>

                <div v-show="tabIdx == 1" class="detail">
                   <div class="title">
                       课程介绍
                       <div class="content">{{describe}}</div>
                    </div>
                    <div class="title">
                       课程目标
                       <div class="content">{{mubiao}}</div>
                    </div>
                    <div class="title">
                       适合人群
                       <div class="content">{{shihe}}</div>
                    </div>
                </div>
                <div v-show="tabIdx ==2" class="com">
                  <CommentInfo />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
@background: #f2f2f2;
    .info{
        width: 100%;
        background-color: @background;
        padding-bottom: 60px;
        box-sizing: border-box;
        display:column;
    }
    img {
        width: 100%;
        height:3.78rem;
    } 
    .bf{
        position: relative;
        margin-bottom:-3rem;
    }
    .detail{
        background-color:white;
        font-size: .28rem;
        width: 100%;
        padding-top:0.26rem;
        display:flex;
        display: -webkit-flex;
        margin-top:-0.1rem;
        padding-left:.15rem;
        box-sizing: border-box;
        .left{
            overflow: hidden;
            .title{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        .buy-btn{
            background-color:#4ac9c0;
            height:.35rem;
            font-size:.28rem;
            text-align: center;
            line-height: 0.35rem;
            margin-left:.4rem;
            margin-top:.2rem;
            border-radius: 0.3rem;
            padding: 0.12rem 0rem;
            flex-grow: 0.8;
            color:white;
        }
    }
    .price,.num-students{
        color:red;
    }
    .row-2nd{
        color:gray;
        padding: 0.25rem 0.1rem 0.2rem;
    }
    .study,.collect{
        margin-left:0.3rem;
    }
    .collect .sc{
        font-size:0.35rem
    }
    .teacher {
        display: flex;
        flex-direction: row;
        align-items: center;
        clear: both;
        background-color:white;
        margin-top:.15rem;
        padding-top:0.2rem;
        padding-bottom:0.2rem;
        font-size:.28rem;
    }
    .avatar {
        justify-content: flex-end;
        flex-grow: 1;
        padding-left: 0.2rem;
    }

    .avatar img {
        border-radius: 2.5rem;
        height: 0.8rem;
        width:0.8rem;
    }

    .user_nicename {
        height: 100%;
        line-height: inherit;
        flex-grow: 8;
        font-size:0.28rem;
        .un-row1{
            margin-bottom:0.16rem;
        }
        .un-row2{
            color:gray;
        }
    }

    /* bookmark */
   .bookmark-btn {
        font-size: 0.28rem;
        background-color:#ccc;
        border-radius: 0.3rem;
        padding: 0.12rem;
        flex-grow: 0.8;
        color:white;
        text-align: center;
        margin-right: 0.24rem;
   }
   /* pane */
    .pane{
        background-color: white;
        margin-top:0.18rem;
        padding-bottom:5rem;
    }
    .sub-pane{
        padding-top:.3rem;
        padding-left:.39rem;
        padding-right:.39rem;
    }
    .sub-pane li{
        font-size:0.28rem;
        padding-top:0.2rem;
        list-style-type:disc;
    }
    .sub-pane .detail{
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        .title{
            font-size:0.3rem;
            padding-bottom:.45rem;
        }
        .content{
            font-size:0.28rem;
            color:gray;
            padding-top:.2rem;
            display:block;
            word-break: break-all;
            word-wrap: break-word;
            padding-right:0.19rem; 
            line-height:0.35rem;
        }
    }
    
    .tab-switch {
        display: flex;
        flex-direction: row;
    }

    .tab-switch .tab {
        width: 50%;
        /* display: inline-block; */
        white-space: nowrap;
        font-size: .3rem;
        text-align: center;
        padding: .4rem 0 0;
        border-bottom: 0.5px solid #f1f1f1;

    }

    .fatty {
        background-color: #4ac9c0;
        width: .8rem;
        height: .15rem;
        margin: .3rem auto 0;
    }

</style>
<script>
import CommentInfo from "./components/CommentInfo";
import { Tab, TabItem, Sticky,XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider ,Swiper, SwiperItem} from 'vux'
const list = () => ['目录', '详情', '评价']

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    XButton,
    Box,
    GroupTitle,
    Group,
    Flexbox,
    FlexboxItem,
    Divider,
    Swiper,
    SwiperItem,
    CommentInfo
  },
  data () {
    return {
        list2: list(),
        getBarWidth: function (index) {
            return (id + 1) * 22 + 'px'
        },
        id: 0,
        avatar: "http://thirdwx.qlogo.cn/mmopen/vi_32/5P36n2coC4k7e3KbUdc31BfUTGg6vQeJgwnFeRBpDUWa8oXmQfwtm0WzFJWNiaoRzd6AwyRpcqGDv465xUTUwdg/132",
        pathname:"http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg",
        cname:"【大兵营销】全能模板-教你做营销达人",
        price:0.01,
        xynum:3840,
        csnum:10,
        user_nicename: "weiwei",
        mubiao: "完成对发际线的初级学习",
        shihe: "发际线爱好者",
        describe: "对发际线的初级学习深入讲解对发际线的初级学习深入讲解对发际线的初级学习深入讲解对发际线的初级学习深入讲解对发际线的初级学习深入讲解对发际线的初级学习深入讲解",
        teacher_id: 18,
        if_favc:0,
        if_favt:0,
        if_buy:1,
        hours: [
          {
            "id": 8,
            "c_id":12,
            "name": "张微发布的课程1--课时1",
            "fileId": "5285890781467462775", // img
          },
           {
            "id": 9,
            "c_id":12,
            "name": "张微发布的课程1--课时2",
            "fileId": "5285890781996183011", // img
          },
        ],
        pinglun: [
            {
                "pinglun": "挺好的qqqq",
                "pingluntime": "2018-10-11 11:47:48",
                "pllevel": "好评",
                "user_nicename": "weiwei",
                "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/5P36n2coC4k7e3KbUdc31BfUTGg6vQeJgwnFeRBpDUWa8oXmQfwtm0WzFJWNiaoRzd6AwyRpcqGDv465xUTUwdg/132"
            },
            {
                "pinglun": "111",
                "pingluntime": "2018-10-11 11:47:48",
                "pllevel": "中评",
                "user_nicename": "糊李糊涂",
                "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8IBbibtcyX6MemcJrtQdGUJf6ibQbKbz2OGvNKIWjWZxHVxsn0BwF690rfMKtk0fCVK6yBBPjevGg/132"
            }
        ],
        tabIdx: 0,
    }
  },
   // life-cycle hooks
    created: function() {
      this.$data.id = this.$route.params.id;
    },
    methods: {
        spaceChange () {
        this.showSpace = !this.showSpace
        this.$nextTick(() => {
            this.$refs.sticky.bindSticky()
        })
    },
     switchTab(i) {
        this.$data.tabIdx = i;
      }
  }
}
</script>

