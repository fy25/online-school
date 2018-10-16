<template lang="html">
  <div class="instructor">
    <!-- I am an instructor. -->
    <div class="title">
      <span class="avatar"  @click="goInfo(id)"><img :src="avatarUrl"></span>

      <span class="name"  @click="goInfo(id)">
        {{name}}
      </span>
      <span class="bookmark-btn">已收藏</span>
    </div>

    <div class="courses">
      <div v-for="course in courses" class="course" >
        <img :src="course.img" alt="" @click="courseInfo(course.id)">
        <div @click="courseInfo(course.id)">
          {{course.name}}
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="css" scoped>
  .instructor {
    font-size: 0.5rem;
    border-top: 0.01rem solid #f1f1f1;
    padding: 0.1rem;
    margin: 0.1rem;
  }

  .title {
    padding-top: 0.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
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

  .name {
    height: 100%;
    line-height: inherit;
    flex-grow: 8;
    font-size: 60%;
  }

  /* bookmark */
  .bookmark-btn {
    font-size: 56%;
    border: 0rem solid grey;
    background-color:#ccc;
    border-radius: 0.3rem;
    padding: 0.12rem;
    flex-grow: 0.8;
    color:white;
    text-align: center;
    margin-right: 0.2rem;
  }

  .courses {
    overflow-x: scroll;
    overflow-y:hidden;
    white-space: nowrap;
    flex-direction: row;
  }

  .course {
    /* line-height: 1rem; */
    display: inline-block;
    height: 3.1rem;
    font-size:56%;
    border: 0rem solid grey;
    margin: 0.1rem;
    width: 2.75rem;
  }

  .course img {
    width: 2.5rem;
    height: 1.9rem;
    margin: 0.3rem 0.1rem 0.2rem;
    object-fit: cover;
    border-radius: 5px;

  }

  .course div {
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>

<script>
// import router from "@/router";
export default {
  data() {
    return {
      avatarUrl: "http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg",
      name: "佳佳",
      id: 123,
      courses: [{
        img: "http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg",
        name: "【大兵营销】全能某班，唧唧歪歪",
        id: 1
      }, {
        img: "http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg",
        name: "【大兵营销】全能某班，唧唧歪歪",
        id: 2
      }, {
        img: "http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg",
        name: "【大兵营销】全能某班，唧唧歪歪",
        id: 3
      }, {
        img: "http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg",
        name: "【大兵营销】全能某班，唧唧歪歪",
        id: 4
      }]
    };
  },
  methods: {
    goInfo: function(id) {
      this.$router.push({
        name: 'instructor-info',
        params: {id: id}
      });
    },
    courseInfo:function(id){
      this.$router.push({
        name:'course-info',
        params:{id:id}
      });
    }
  }

}
</script>
