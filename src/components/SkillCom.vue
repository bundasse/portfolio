<template lang="">
    <div id="skill">
        <h2>사용 기술</h2>
        <p class="subtext">Skills</p>
        <ul>
            <li v-for="e in skills" :key="e" data-aos="fade-left" data-aos-duration="500">
                <img :src="require(`@/assets/icons/${e.icon}`)" :alt="e.name">
                <div class="skilltext">
                    <p class="skillname">{{e.name}}</p>
                    <p class="skilldesc" v-html="e.desc"></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import data from '@/assets/Skill.json'
export default {
    name: "SkillCom",
    data() {
        return {
            skills:data
        }
    },
    created() {
        AOS.init();
    },
}
</script>
<style lang="scss">
@import "@/styles/mixins.scss";
#skill{
    padding:5% 0 10% 0;
    width:100%;
    min-height: 100vh;
    height:100%;
}
@include title;
ul li{
    display:flex;
    flex-wrap: wrap;
    justify-items: flex-start;
    margin-bottom: 2rem;
    img{
        width:64px;
        height:64px;
    }
    .skilltext{
        margin-left: 20px;
        max-width:800px;
        p{
            margin:0;
        }
        .skillname{
            font-size:1.5rem;
            font-weight: 600;
            margin-bottom:10px;
        }
    }
}
</style>