<template>
    <div class="teacher">
        <div class="teacher-wrapper">
            <img src="../assets/images/logo.png" alt="">
            <strong class="fs26">佳佳</strong>
            <span class="fs24 gray-color">纹绣讲师</span>
            <div class="fs24 gray-color">
                <span>教程：18</span>
                <span>粉丝：18</span>
            </div>
            <XButton type="primary" text="收藏" mini></XButton>
        </div>
    </div>
</template>

<style lang="less">
.teacher{
    display: inline-block;
}
.teacher-wrapper {
  background-color: #fff;
  border-radius: 10px;
  width: 2.7rem;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.28rem;
  box-sizing: border-box;
  img {
    width: 0.76rem;
    height: 0.76rem;
    border-radius: 50%;
    margin-bottom: 0.25rem;
  }
  strong,
  span,
  div {
    margin-bottom: 0.2rem;
  }
  strong{
      font-weight: 700;
  }
  div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
}
</style>


<script>
import { XButton } from "vux";

export default {
  components: {
    XButton
  }
};
</script>

