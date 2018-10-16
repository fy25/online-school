<template lang="html">
  <common-layout>
    <div slot="content">
      <div v-for="n in a">
        <instructor />
      </div>
    </div>
  </common-layout>
</template>

<style lang="css" scoped>

</style>


<script>
import Instructor from "./components/Instructor";

export default {
  data() {
    return {
      a: [1,2,3]
    };
  },
  components: { Instructor }
}
</script>
