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
  mounted() {
    document.documentElement.setAttribute("data-theme", "light");
  },
});
</script>
<style lang="scss">
@import "@/styles/mixins.scss";
body{margin:0; padding:0; background:var(--color-background); color:var(--color-text)}
#wrap{
  display:flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
