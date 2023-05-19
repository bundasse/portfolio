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
            MenuIndex: 0,
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
        // SectionMove(index :number){
        // this.MenuIndex = index;
        // const rect = this.ArrayList[this.MenuIndex].getBoundingClientRect();
        // const offset = rect.top + window.scrollY;
        // window.scrollTo({
        //     top: offset,
        //     behavior: 'smooth'
        // })
        // }
    },
    mounted() {
        // this.ArrayList = this.$refs;
    }, 
}
</script>
<style scoped>
  .mainWrap{flex:80%; margin-left:250px; padding:0 2%; box-sizing: border-box;}
</style>