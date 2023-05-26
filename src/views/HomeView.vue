<template>
    <div class="mainWrap">
        <div ref="section-0">
            <TitleCom/>
        </div>
        <div ref="section-1">
            <SkillCom/>
        </div>
        <div ref="section-2">
            <PortfolioCom/>
        </div>
        <div ref="section-3">
            <ContactCom/>
        </div>
        <FooterView />
        <div class="bg"></div>
    </div>
</template>

<script>
import TitleCom from '@/components/TitleCom.vue';
import SkillCom from '@/components/SkillCom.vue';
import PortfolioCom from '@/components/PortfolioCom.vue';
import ContactCom from '@/components/ContactCom.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  name:"HomeView",
    data() {
        return {
            fontStyle:"",
            ArrayList: [],
            lang:0,
        }
    },
    components:{
        TitleCom,
        SkillCom,
        PortfolioCom,
        ContactCom,
        FooterView
    },
    methods: {
    },
    computed: {
        sectionMove() {
        return this.$store.state.selectIndex
        },
    },
  watch: {
        sectionMove() {
            let rect = this.ArrayList[`section-${[this.$store.state.selectIndex]}`].getBoundingClientRect();
            const offset = rect.top + window.scrollY;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            })
        },

    },
    mounted() {
        this.ArrayList = this.$refs;
    }, 
}
</script>
<style scoped>
  .mainWrap{flex:80%; margin:0; margin-left:280px; padding:0; box-sizing: border-box;}
  .bg{
      width:30vw;
      height: 100vh;
      display: block;
      position:fixed;
      top:0;
      right:0;
      z-index: -1;
      background-image: linear-gradient(225deg, rgba(170, 255, 210, 0.6) 0%,rgba(255, 254, 190,0.5) 30%, rgba(255, 254, 190,0) 40%);
  }
</style>