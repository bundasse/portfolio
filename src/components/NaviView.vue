<template lang="">
  <!-- 데스크탑 내비게이션 -->
    <nav class="naviWrap">
        <ul class="navi">
            <li v-for="(e,i) in Navdata" :key="i" :class="i === this.$store.state.watchIndex && 'on'">
                <router-link to="/" @click="$store.state.selectIndex = i;" class="naviObject">
                    <button class="btn_menu"></button><p class="side">{{e}}</p>
                </router-link> 
            </li>
        </ul>
        <!-- 모바일 내비게이션 -->
        <div class="mobileNav">
          <div class="mobileNavTop">
            <button @click="navOpen = !navOpen">
              <p class="line" :class="navOpen === true && 'on'"></p>
              <p class="line" :class="navOpen === true && 'on'"></p>
            </button>
          </div>
          <div class="mobileNavBottom" :style="navOpen === true ? 'height:220px':'height:0'">
            <ul>
              <li v-for="(e,i) in Navdata" :key="i" :class="i === this.$store.state.selectIndex && 'on'">
                  <router-link to="/" @click="$store.state.selectIndex = i; navOpen = false" class="naviObject">
                      <button class="btn_menu"></button><p class="side">{{e}}</p>
                  </router-link> 
                </li>
            </ul>
          </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:"NaviView",
    data() {
        return {
            Navdata: ["처음으로", "사용기술", "포트폴리오", "연락하기"],
            navOpen: false,
        }
    },
}
</script>
<style scoped lang="scss">
@import "@/styles/mixins.scss";
.naviWrap{margin:0; padding:0; margin-top:50px; display: block; position: fixed; left:0;
  z-index: 50;
  @media (max-width: 991px){
    flex:100%;
    width: 100%;
    margin-top:0;
    background: var(--color-background);
  }
}
.navi{
  display: flex;
  flex-direction: column;
  width: 200px;
  list-style: none;
  overflow: hidden;
  gap: 20px;
  transition:all 0.5s;
  @media (max-width: 991px){
    display: none;
  }
  li{
  border-radius: 15px;
  line-height: 40px;
  }

  li .naviObject{
    display: block;
    position: relative;
    padding: 10px 0;
  }
  li.on .btn_menu{
    border: 2px var(--color-point) solid;
    background: var(--color-point);
    color: var(--color-point); 
  }
  li.on .btn_menu:before{
    display: none;
  }
  li.on a .side{
    color:var(--color-point);
  }
}
.btn_menu {
  display: block;
  position: relative;
  height: 25px;
  width: 25px;
  border: 2px var(--color-point2) solid;
  border-radius: 50%;
  outline: 0;
  overflow:hidden;
  background: none;
  z-index: 1;
  cursor: pointer;
  transition:         0.2s ease-in;
  -o-transition:      0.2s ease-in;
  -ms-transition:     0.2s ease-in;
  -moz-transition:    0.2s ease-in;
  -webkit-transition: 0.2s ease-in;
  &:before{
    content: "";
    position: absolute;
    background: var(--color-point2);
    border: 2px var(--color-point2) solid;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.2s ease-in;
    -webkit-transition: top 0.2s ease-in;
  }
}
.naviObject:hover .btn_menu:before{
  top: 0;
}
.navi li .naviObject .side{
  display: block;
  position: absolute;
  top:-0.8em;
  left: 80px;
  width: 100px;
  color:var(--color-text);
}
.navi li .naviObject:hover .side{
  color: var(--color-point2);
}
// 모바일 내비게이션
.mobileNav{
  display: none;
  @media (max-width: 991px){
    display: block;
  }
  .mobileNavTop{
    padding:5px 10px;
    border-bottom: 1px solid var(--color-point);
  }
  .mobileNavBottom{
    transition:all 0.5s;
    border-bottom: 5px solid var(--color-text);
    overflow: hidden;
  }
  button{
    width: 50px;
    height: 50px;
    background: none;
    border:0;
    .line{
      width:30px;
      height:1px;
      background: var(--color-text);
      margin:0;
      transition:all 0.2s;
      &:last-child{
        margin-top:15px;
      }
      &.on{
        margin-top:0px;
        rotate: 45deg;
      }
      &.on:last-child{
        margin-top:0px;
        rotate: -45deg;
      }
    }
  }
    ul{
      display: flex;
      flex-direction: column;
      list-style: none;
      overflow: hidden;
      transition:all 0.5s;
      gap: 20px;
    }
    ul li{
      border-radius: 15px;
      line-height: 23px;
    }
    ul li .naviObject{
      display: block;
      position: relative;
      padding: 5px 0;
    }
    .btn_menu {
      display: block;
      position: relative;
      height: 20px;
      width: 20px;
      border: 1px var(--color-point2) solid;
      border-radius: 50%;
      background: none;
      cursor: pointer;
    }
    ul li .naviObject .side{
      display: block;
      position: absolute;
      top:-0.8em;
      left: 50px;
      color:var(--color-text);
    }
    ul li.on .side{
      color:var(--color-point);
    }
    li.on .btn_menu{
      border: 2px var(--color-point) solid;
      background: var(--color-point);
    }
    li.on .btn_menu:before{
      display: none;
    }
}
</style>