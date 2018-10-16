<template lang="html">
  <div class="container">
    <!-- {{$route.params.id}}
    {{id}} -->
    <div class="banner">
      <div class="avatar">
        <img :src="avatarUrl">
      </div>
      <div class="name">
        {{name}}
      </div>

      <!-- <div class="courses-and-followers">
      <span class="num-courses">{{'教程：' + courses}}</span>
      <span class="short-line"></span>
      <span class="num-followers">{{'粉丝：' + followers}}</span>
    </div> -->

    <div class="courses-and-followers">
      <span class="text num-courses">{{'教程：' + courses}}</span>
      <span class="line"></span>
      <span class="text num-followers">{{'粉丝：' + followers}}</span>
    </div>

    <div class="fav-btn">
      <span>收藏</span>
    </div>
  </div>
  <div class="pane">
    <div class="tab-switch">
      <div class="tab" @click="switchTab(0)">
        个人介绍
        <div class="fatty" v-show="tabIdx == 0"></div>
      </div>
      <div class="tab" @click="switchTab(1)">
        在线教程
        <div class="fatty" v-show="tabIdx == 1"></div>
      </div>
    </div>
    <div class="sub-pane">
      <div v-show="tabIdx == 0" class="intro">
        {{intro}}
      </div>

      <div v-show="tabIdx == 1" class="courses">
        all courses here

      </div>
    </div>
  </div>

</div>
</template>

<style lang="css" scoped>
  .container {

  }

  .banner {
    background-image: url("https://edu-1257143824.cos.ap-shanghai.myqcloud.com/online-school/sssa681f2af0718118e8.jpg");
    background-size: cover;
    width: 100%;
    height: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
  }

  .banner div {
    margin-bottom: 0.1rem;
  }

  .avatar img {
    border-radius: 2.5rem;
    height: 1.2rem;
  }

  .banner .courses-and-followers{
    height: .8rem;
    line-height: .8rem;
  }

  .courses-and-followers .line{
    display: inline-block;
    height: .4rem;
    width: 1px;
    background: #eee;
    float: left;
    margin: .2rem .2rem .5rem;
  }

  .courses-and-followers .text{
    display: inline-block;
    width: 47%;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .3rem;
  }

  .courses-and-followers .num-courses{
    text-align: right;
  }

  .courses-and-followers .num-followers{
    text-align: left;
  }

  .fav-btn span {
    background-color: orange;
    font-size: .3rem;
    border-radius: .5rem;
    padding: .1rem .3rem;
  }

  .intro {
    font-size: .4rem;
    color: #aaa;
    padding: .5rem;
  }

  .tab-switch {
    display: flex;
    flex-direction: row;
  }

  .tab-switch .tab {
    width: 50%;
    /* display: inline-block; */
    white-space: nowrap;
    font-size: .4rem;
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
  export default {
    data() {
      return {
        id: 0,
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO7WNBdA3OBvlUdYgIn-hexRDooxFaeR7U1BPk-CA59cbC6y1",
        name: "Jake",
        courses: 100,
        followers: 1001283128,

        // in the backend this is called a tcProfile
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        lecturesList: [
          {
            "id": 12,
            "name": "张微发布的课程1",
            "pathname": "http://www.astro.caltech.edu/outreach/images/lecture.jpg", // img
            "price": "888", //
            "stock": 98,
            "teacher_id": 18,
            "sort": null, // ???
            "xynum": "22305", // num of registed students
            "csnum": "10" // num of lectures in this course
          },
          {
            "id": 12,
            "name": "张微发布的课程1",
            "pathname": "http://www.astro.caltech.edu/outreach/images/lecture.jpg", // img
            "price": "888", //
            "stock": 98,
            "teacher_id": 18,
            "sort": null, // ???
            "xynum": "22305", // num of registed students
            "csnum": "10" // num of lectures in this course
          },
          {
            "id": 12,
            "name": "张微发布的课程1",
            "pathname": "http://www.astro.caltech.edu/outreach/images/lecture.jpg", // img
            "price": "888", //
            "stock": 98,
            "teacher_id": 18,
            "sort": null, // ???
            "xynum": "22305", // num of registed students
            "csnum": "10" // num of lectures in this course
          }
        ],
        tabIdx: 0,

      };
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
