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
        <div class="bg">
        </div>
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
    methods: {
        onScroll(){
            if(this.ArrayList['section-1'].getBoundingClientRect().top -100 >= 0){
                this.$store.state.watchIndex = 0;
            }else if(this.ArrayList['section-2'].getBoundingClientRect().top -100 >= 0){
                this.$store.state.watchIndex = 1;
            }else if(this.ArrayList['section-3'].getBoundingClientRect().top -100 >= 0){
                this.$store.state.watchIndex = 2;
            }else{
                this.$store.state.watchIndex = 3;
            }
        }
    },
    mounted() {
        this.ArrayList = this.$refs;
        this.onScroll
        window.addEventListener("scroll",this.onScroll)
    },
    beforeUnmount(){
        window.removeEventListener("scroll",this.onScroll)
    }
}
</script>
<style lang="scss" scoped>
.mainWrap{flex:80%; margin:0; padding:0; margin-left:320px; box-sizing: border-box;
    @media (max-width: 991px){
        flex:100%;
        width:100%;
        margin:65px 0 0 0;
        overflow: hidden;
}
}
  .bg{
      width:40vw;
      height: 100vh;
      display: block;
      position:fixed;
      top:0;
      right:0;
      z-index: -1;
      background-image: linear-gradient(225deg, var(--gradation-start) 0%,var(--gradation-middle) 30%, var(--gradation-end) 40%);
      @media (max-width: 991px){
        width:100vw;
        background-image: linear-gradient(315deg, var(--gradation-start) 0%,var(--gradation-middle) 30%, var(--gradation-end) 40%);
    }
}
</style>