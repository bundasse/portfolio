<template>
    <div class="wrap">
        <div>
            <h2>함께 성장하는 프론트엔드 개발자</h2>
            <p class="subtext">Front-end developer</p>
            <div class="contents">
                <p>
                    누구나 쉽게 쓸 수 있는 웹을 만들고 싶은,<br/>
                    교류와 소통으로 레벨업 하는<br/>
                프론트엔드 개발자 조영민입니다.
            </p>
            <ul class="link">
                <li v-for="(e,i) in link" :key="e"  @mouseenter="mouseOn=true; selecti=i" @mouseleave="mouseOn = false;selecti=null"><a :href="e.link"><img :src="mouseOn ===true && selecti ===i? require(`@/assets/icons/${e.icon}_on.png`):require(`@/assets/icons/${e.icon}.png`)" :alt="e.alt"/></a></li>
            </ul>
            </div>
        </div>
        <button class="submit" @click="$store.state.selectIndex = 3">메일 바로가기</button>
    </div>
</template>
<script>
export default {
    name: "TitleCom",
    data() {
        return {
            selecti:null,
            mouseOn:false,
            link:[
                {icon:"ico_github",link:"https://github.com/bundasse", alt:"GitHub"},
                {icon:"ico_tistory",link:"https://bundasse.tistory.com/",alt:"Tistory"},
                {icon:"ico_notion",link:"https://admitted-angle-505.notion.site/246f1b4d37d04595894ebd3670ad2d65",alt:"Notion"}
            ]
        }
    },
}
</script>
<style lang="scss">
@import "@/styles/mixins.scss";
.wrap{@include wrap;
    padding-top: 10%;
    @media (max-width: 991px){padding-top:150px}
    box-sizing: border-box;
    line-height: 1.8rem;
}
.contents{
    @media (max-width: 991px){
    padding-left:30px;}
}
.link{
    display:flex;
    margin:0;
    padding:0;
    margin-top:30px;
    height:80px;
    gap:2rem;
    li{
        transition: all 0.3s;
        img{
            width:50px;
            height:50px;
        }
    }
    li:hover{
        margin-top:10px;
    }
}
@include title;
p{font-size: 1.2em}
@include buttons(250px);
</style>