<template lang="">
    <div id="portfolio">
        <h2>포트폴리오 작업물</h2>
        <p class="subtext">Portfolio</p>
        <section>
            <router-link to="/portfolio" v-for="e in catelist" :key="e" @click="this.$store.state.catename = e.title;">
                <article><h4>{{e.title}}</h4><p v-html="e.desc"></p></article>
            </router-link>
        </section>
    </div>
</template>
<script>
export default {
    name: "PortfolioCom",
    data() {
        return {
            catelist:[
                {
                    title:"클론코딩",
                    desc:"현재 서비스되고 있는 앱이나 웹사이트를 클론코딩한 것입니다.<br />배운 내용을 토대로 최대한 본래 사이트의 디자인과 레이아웃, 기능을 구현하고자 하였습니다.",
                },
                {
                    title:"웹앱",
                    desc:"택배 조회 시스템, 퀴즈 웹 어플리케이션 등 일반 홈페이지에 비해 특수한 기능을 목적으로 하는 웹 앱 형태의 사이트입니다.<br />서드파티 API나 라이브러리, 직접 짠 알고리즘을 통해 기능을 구현 하는데 중점을 두었습니다.",
                },             
                {
                    title:"홈페이지",
                    desc:"메인 페이지 만이 아닌 사이트 전체를 제작한 홈페이지입니다.<br />현재는 기업 홈페이지 템플릿과 포트폴리오 사이트가 작업물로 수록되어 있습니다. 템플릿 페이지의 경우 로그인, 회원가입, 게시판 등 Firebase를 활용한 기능에 주안을 두었습니다.",
                },
                {
                    title:"미니 프로젝트",
                    desc:"단순한 기능이나 컴포넌트 레이아웃을 구현하는 것에 초점을 둔 자잘한 개인 작업물들입니다. 주로 Frontend Mentor 사이트의 챌린지 작업물이 있습니다.",
                },   
            ],
            cateselect:'전체'
        }
    },
}
</script>
<style lang="scss">
@import "@/styles/mixins.scss";
#portfolio{@include wrap}
@include title;
section{
    display:flex;
    margin-top: 30px;
    justify-content: space-around;
    @media (max-width: 991px){
        flex-wrap: wrap;
        row-gap: 10px;
    }
    a{
        flex-basis: 22%;
        height: 500px;
        border:2px solid var(--color-point);
        background: var(--color-point);
        position: relative;
        overflow: hidden;
        @media (max-width: 991px){
            flex-basis: 100%;
            height: 350px;
        }
        &::after{
            position: absolute;
            content:'';
            top:0;
            left:0;
            opacity: 0;
            width: 100%;
            height: 500px;
            background: linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0.5));
            transition: all 1s;
            z-index: 10;
            @media (max-width: 991px){
                opacity: 0.8;
            }
        }
        &:hover::after{
            opacity: 1;
        }
        article{
            position: absolute;
            width: 100%;
            top:100px;
            opacity: 0;
            padding:50px 0;
            color:white;
            text-align: center;
            transition: all 1s;
            z-index: 20;
            h4{
                width: 100%;
                font-size: 2rem;
                font-weight: 400;
            }
            p{
                width: 90%;
                margin: 0 auto;
                font-size:1.2rem;
                line-height: 1.8rem;
            }
            @media (max-width: 991px){
                    opacity: 1;
                    top:0;
                    padding: 0;
                }
        }
        &:hover article{
            top: 0;
            opacity: 1;
        }
    }
}

</style>