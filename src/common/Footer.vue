<template>
  <tabbar>
      <tabbar-item :selected="active == 'index'"  link='/'>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="active == 'instructors'" show-dot link="/instructors">

        <span slot="label">金牌讲师</span>
      </tabbar-item>
      <tabbar-item :selected="active == 'forum'" link="/forum">
        <span slot="label">交流论坛</span>
      </tabbar-item>
      <tabbar-item :selected="active == 'profile'" badge="2" link="/profile">

        <span slot="label" >个人中心</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import {  Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: 'Footer',
  data: function() {
    return {
    };
  },
  props:{
    active:{
      type:String,
      default:'index'
    }
  },
  mounted() {
  },
  computed: {

  },
  components: {Tabbar, TabbarItem, Group, Cell},
  methods: {

  }
};
</script>
<style  scoped>

</style>
