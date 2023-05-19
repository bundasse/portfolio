<template>
  <div id="wrap">
    <NaviView/>
    <router-view></router-view>
  </div>
</template>
<script>
import NaviView from '@/components/NaviView.vue';
export default({
  name: 'HomeView',
  components: {
    NaviView
  },
});
</script>
<style lang="scss">
#wrap{
  display:flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
