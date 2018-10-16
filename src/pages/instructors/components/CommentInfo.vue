<template lang="html">
    <div class="comments">
        <div v-for="pinglun in pingluns" class="teacher row-pl">
            <div class="pl-avatar"><img :src="pinglun.avatar" alt=""></div>
            <div class="colu">
                <div class="nic">
                    <div class="nic-row ro">{{pinglun.user_nicename}}</div>
                    <div class="t-time ro">{{pinglun.pingluntime}}</div>
                    <div class="leve ro">{{pinglun.pllevel}}<i class="iconfont icon-haoping fac"></i></div>
                </div>
                <div class="pl-row ">{{pinglun.pinglun}}</div>
            </div>

        </div>
    </div>
</template>

<style lang="less">
.comments{
     margin-left:-0.2rem;
     margin-top:0.3rem;

}
.row-pl{
    padding-bottom:0.5rem;

    .pl-avatar img{
         border-radius: 2.5rem;
        height: 0.8rem;
        width:0.8rem;
    }
}

.colu{
    width:100%;
    display:flex;
    flex-direction: column;
    margin-left:0.35rem;
    font-size:0.28rem;
    .nic{
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        .ro i{
            margin-left:0.1rem;
            font-size:0.3rem;
        }
        .t-time{
            margin-left:1.5rem;
        }
        .nic-row{
            margin-bottom:0.16rem;
        }

    }
        
        .pl-row{
            color:gray;
            word-break: break-all;
            word-wrap: break-word;
            line-height:0.35rem;
        }
}

</style>

<script>
  export default {
    data() {
      return {
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
        pingluns: [
            {
                "pinglun": "挺好的",
                "pingluntime": "2018-10-11",
                "pllevel": "好评",
                "user_nicename": "weiwei",
                "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/5P36n2coC4k7e3KbUdc31BfUTGg6vQeJgwnFeRBpDUWa8oXmQfwtm0WzFJWNiaoRzd6AwyRpcqGDv465xUTUwdg/132"
            },
            {
                "pinglun": "还不错",
                "pingluntime": "2018-10-11",
                "pllevel": "中评",
                "user_nicename": "糊李糊涂",
                "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8IBbibtcyX6MemcJrtQdGUJf6ibQbKbz2OGvNKIWjWZxHVxsn0BwF690rfMKtk0fCVK6yBBPjevGg/132"
            }
        ],
        tabIdx:0,
      }
    },

    // life-cycle hooks
    created: function() {
      this.$data.id = this.$route.params.id;
    },

    // methods
    methods: {
      switchTab(i) {
        this.$data.tabIdx = i;
      }
    }

  }
</script>
