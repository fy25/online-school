<template>
    <div>
       <div class="lesson">
           <div class="lesson-banner">
               <img src="http://p0rz0hmjn.bkt.clouddn.com/about_02.jpg" alt="">
               <p class="fs26">【大兵营销】全能某班，唧唧歪歪</p>
           </div>
           <div class="lesson-info gray-color fs24">
               <p class="important-color">￥120</p>
               <div>
                   <span>已更新</span>
                   <strong class="important-color">9</strong>
                   <span>节课</span>
               </div>
           </div>
           <div class="lesson-info gray-color fs24">
               <p>仅剩：60</p>
               <div>
                   <strong class="important-color">9456</strong>
                   <span>人已学习</span>
               </div>
           </div>
       </div>
    </div>
</template>

<style lang="less" scoped>
.lesson {
  display: flex;
  flex-direction: column;
  width: 3.25rem;
  .lesson-banner {
    position: relative;
    width: 100%;
    height: 2.3rem;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding: 0.15rem 0.08rem;
      box-sizing: border-box;
    }
  }
  .lesson-info{
      display: flex;
      justify-content: space-between;
      margin-top: 0.15rem;
  }
}
</style>


<script>
export default {};
</script>
