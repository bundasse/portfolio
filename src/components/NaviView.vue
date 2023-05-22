<template lang="">
    <nav class="naviWrap">
        <ul class="navi">
            <li v-for="(e,i) in Navdata" :key="i" :class="'section-'+i === this.$store.state.MenuIndex && 'on'">
                <router-link to="/" @click="$store.commit('SectionMove','section-'+(i)); $store.state.selectIndex=i" class="naviObject">
                    <button class="btn_menu"></button><p class="side">{{e}}</p>
                </router-link> 
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:"NaviView",
    data() {
        return {
            Navdata: ["처음으로", "사용기술", "포트폴리오", "연락하기"]
        }
    },    
}
</script>
<style lang="scss">
.naviWrap{margin-top:50px; display: block; position: fixed; left:0;}
.navi{
  display: flex;
  flex-direction: column;
  gap: 40px;
  list-style: none;
  width: 50px;
  height: 500px;
  overflow: hidden;
  transition:all 0.3s;
  &:hover{width:200px;}
}
ul li{
  border-radius: 15px;
  line-height: 45px;
}
ul li .naviObject{
  display: block;
  position: relative;
  padding: 10px
}
.btn_menu {
  display: block;
  position: relative;
  height: 25px;
  width: 25px;
  border: 1px #90BF87 solid;
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
    background: #90BF87;
    border: 1px #90BF87 solid;
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
ul li .naviObject .side{
  display: block;
  position: absolute;
  top:-0.8em;
  left: 80px;
  width: 100px;
  color:black;
}
.naviObject:hover .side{
  color: #90BF87;
}
ul li.on .side{
  color:#FF7F5B;
}
li.on .btn_menu{
  border: 1px #FF7F5B solid;
  background: #FF7F5B;
}
li.on .btn_menu:before{
  display: none;
}
</style>