<template>
  <div>
    <common-top />
    <div class="app-main">
    <slot name="content">这里显示正文</slot>
    </div>
    <common-footer />
</div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>

