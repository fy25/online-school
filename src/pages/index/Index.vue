<template>
    <div class="index">
      <!-- 轮播开始 -->
      <div class="index-banner">
        <Swiper :list="list" :dots-position="dotsPosition" :auto="auto" :height="height" :show-desc-mask="mask"></Swiper>
        <div class="index-search">
          <div class="index-search-wrapper">
            <i class="iconfont icon-search"></i>
            <input type="text" placeholder="学纹绣来如花，每天进步一点点">
          </div>
        </div>
      </div>
      <!-- 轮播结束 -->
      <!-- tab开始 -->
      <div class="index-tab">
        <div class="index-tab-item" v-for="(item,index) in tabList" :key="index" :data-id="item.id" @click="goWhere">
          <img :src="item.img" alt="">
          <p>{{item.text}}</p>
        </div>
      </div>
      <!-- tab结束 -->
      <!-- ad开始 -->
      <div class="index-ad">
        <Swiper :list="adList" :dots-position="dotsPosition" :auto="auto" :height="adHeight" :interval="interval" :show-dots="showDot" :show-desc-mask="mask"></Swiper>
      </div>
      <!-- ad结束 -->
      <!-- 课程列表开始 -->
      <div class="index-lesson">
        <div class="index-lesson-tit">
          <strong>精选课程</strong>
          <div>
            <span class="main-color fs24">查看更多</span>
            <x-icon type="ios-arrow-right" size="20" class="gray-color"></x-icon>
          </div>
        </div>
        <div class="index-lesson-list">
          <lesson></lesson>
          <lesson></lesson>
        </div>
        <osline></osline>
        <div class="index-lesson-tit">
          <strong>推荐课程</strong>
          <div>
            <span class="main-color fs24">查看更多</span>
            <x-icon type="ios-arrow-right" size="20" class="gray-color"></x-icon>
          </div>
        </div>
        <div class="index-lesson-list">
          <lesson></lesson>
          <lesson></lesson>
        </div>
      </div>
      <!-- 课程列表结束 -->
      <!-- 推荐讲师开始 -->
      <div class="index-teacher">
        <div class="index-teacher-tit">
          <strong class="fs28">推荐讲师</strong>
        </div>
        <div class="index-teacher-list">
          <teacher></teacher>
          <teacher></teacher>
          <teacher></teacher>
          <teacher></teacher>
          <teacher></teacher>
        </div>
      </div>
      <!-- 推荐讲师结束 -->
      <Footer></Footer>
    </div>
</template>

<style lang="less" scoped>
@background: #f2f2f2;
.index {
  padding-bottom: 100px;
}
.index-banner {
  position: relative;
  .index-search {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.2rem 0.6rem;
    box-sizing: border-box;
    .index-search-wrapper {
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      height: 0.56rem;
      border-radius: 60px;
      padding: 0 0.2rem;
      background-color: rgba(255, 255, 255, 0.7);
      i {
        color: #999;
        font-size: 0.3rem;
      }
      input {
        background-color: transparent;
        margin-left: 10px;
        width: 100%;
        outline: none;
      }
    }
  }
}
.index-tab {
  display: flex;
  align-items: center;
  height: 1.9rem;
  background-color: #fff;
  .index-tab-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.28rem;
    img {
      width: 0.75rem;
      height: 0.75rem;
      margin-bottom: 0.2rem;
    }
  }
}
.index-ad {
  padding: 0.2rem 0;
  background-color: @background;
}
.index-lesson {
  padding: 0.3rem;
  box-sizing: border-box;
  background-color: #fff;
  .index-lesson-tit {
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
    margin-top: 0.3rem;
    strong {
      font-size: 0.28rem;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
  .index-lesson-list {
    display: flex;
    justify-content: space-between;
    margin: 0.3rem 0;
  }
}
.index-teacher {
  background-color: @background;
  padding: 0.3rem 0;
  box-sizing: border-box;
  .index-teacher-tit {
    display: flex;
    margin-bottom: 0.3rem;
    padding: 0 0.3rem;
  }
  .index-teacher-list {
    white-space: nowrap;
    overflow-x: scroll;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
}
</style>


<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import Index from "@/services/index/index";
import lesson from "../../components/lesson";
import osline from "../../components/os-line";
import teacher from "../../components/teacher";
import Footer from "../../common/Footer";

import { Swiper } from "vux";

var indexApi = new Index();
export default {
  data() {
    return {
      list: [
        {
          url: "javascript:",
          img: "http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg"
        },
        {
          url: "javascript:",
          img: "http://p0rz0hmjn.bkt.clouddn.com/xyhbban1.jpg"
        }
      ],
      adList: [
        {
          url: "javascript:",
          img: "http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg"
        },
        {
          url: "javascript:",
          img: "http://p0rz0hmjn.bkt.clouddn.com/xyhbban1.jpg"
        }
      ],
      dotsPosition: "center",
      auto: true,
      interval: 5000,
      height: "3.78rem",
      adHeight: "1.5rem",
      mask: false,
      showDot: false,
      tabList: [
        {
          img: require("../../assets/images/tab1.png"),
          text: "眉",
          id: "1"
        },
        {
          img: require("../../assets/images/tab2.png"),
          text: "眼",
          id: "2"
        },
        {
          img: require("../../assets/images/tab3.png"),
          text: "唇",
          id: "3"
        },
        {
          img: require("../../assets/images/tab4.png"),
          text: "发际线",
          id: "4"
        },
        {
          img: require("../../assets/images/tab5.png"),
          text: "全部",
          id: "5"
        }
      ]
    };
  },
  components: {
    Swiper,
    lesson,
    Footer,
    osline,
    teacher
  },
  mounted() {
    // this.$vux.toast.show({
    //   text: "q",
    //   type: "text"
    // });
  },
  methods: {
    // 去外婆家
    goWhere(e) {
      this.$router.push({
        name: "lesson",
        params: {
          id: e.currentTarget.dataset.id
        }
      });
    },

    test() {
      indexApi.slide().then(res => {
        console.log(res);
      });
    }
  }
};
</script>



