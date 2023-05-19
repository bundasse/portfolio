<template lang="">
    <div id="skill">
        <h2>사용 기술</h2>
        <p class="subtext">Skills</p>
    </div>
</template>
<script>
export default {
    name: "SkillCom",
    data() {
        return {
            skills:[
                {
                    icon:"",
                    name:"",
                    desc:""
                },
                {
                    icon:"",
                    name:"",
                    desc:""
                },
                {
                    icon:"",
                    name:"",
                    desc:""
                },
                {
                    icon:"",
                    name:"",
                    desc:""
                },
                {
                    icon:"",
                    name:"",
                    desc:""
                },
                {
                    icon:"",
                    name:"",
                    desc:""
                }
            ]
        }
    },
}
</script>
<style lang="scss">
@import "@/styles/mixins.scss";
#skill{
    padding:10% 0;
    width:100%;
    height:100vh;
}
@include title;
</style>