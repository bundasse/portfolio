<template>
    <div class="mainWrap">
        <div class="goback">
            <button @click="$router.go(-1);this.$store.state.selectIndex = 2;">&#8636; <span>뒤로가기</span></button>
        </div>
        <div class="catenavi">
            <ul>
                <li :class="$store.state.catename === '전체' && 'on'" @click="$store.state.catename = '전체'; this.move()">전체</li>
                <li :class="$store.state.catename === '클론코딩' && 'on'" @click="$store.state.catename = '클론코딩'; this.move()">클론코딩</li>
                <li :class="$store.state.catename === '웹앱' && 'on'" @click="$store.state.catename = '웹앱'; this.move()">웹앱</li>
                <li :class="$store.state.catename === '홈페이지' && 'on'" @click="$store.state.catename = '홈페이지'; this.move()">홈페이지</li>
                <li :class="$store.state.catename === '미니 프로젝트' && 'on'" @click="$store.state.catename = '미니 프로젝트'; this.move()">미니 프로젝트</li>
            </ul>
        </div>
        <div v-for="(e,index) in CateItem" :key="index" class="portitem">
            <img v-if="e.img !== ''" :src="require(`@/assets${e.img}`)" :alt="e.title">
            <div class="porttext">
                <span class="portcate">{{ e.category }}</span>
                <h3>{{ e.title }}</h3>
                <p class="days">{{ e.date }} / {{ e.howlong }}일</p>
                <ul class="tags">
                    <li v-for="el in e.keyword" :key="el"><span class="tagob">#{{ el }}</span></li>
                </ul>
                <p class="tags">
                    TOOLS: <span v-for="el2 in e.tools" :key="el2">[{{ el2 }}]</span>
                </p>
                <div class="desc">
                    <p v-for="el in e.desc" :key="el">{{ el }}</p>
                </div>
                <div class="link">
                    <a v-if="e.originLink !== ''" :href="e.originLink" target="_blank" class="moveBtn">원본 사이트</a>
                    <a v-if="e.siteLink !== ''" :href="e.siteLink" target="_blank" class="moveBtn">구현 사이트</a>
                    <a v-if="e.docu !== ''" :href="e.docu" target="_blank" class="moveBtn">작업 관련 문서</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import data from "../assets/Data.json"
export default {
    name:"PortfolioView",
    data() {
        return {
            Worklist: data
        }
    },
    computed:{
        CateItem(){
            return this.Worklist.portlist.slice().reverse().filter((e)=>{
                if (this.$store.state.catename !== "전체"){
                    return e.category === this.$store.state.catename
                }else{
                    return e.category
                }
            })
        }
    },
    methods: {
        move(){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    },
    created() {
        window.scrollTo({top: 0, behavior: 'smooth'})
        AOS.init();
    },
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.mainWrap{flex:80%; margin:0; padding:0; margin-left:320px; box-sizing: border-box;
    @media (max-width: 991px){
        flex:100%;
        width:100%;
        margin:65px 0 0 0;
}
}
.catenavi{
    position:sticky;
    top:0px;
    background: var(--color-background);
    padding:5px 0;
    @media (max-width: 991px){
        top:60px;
    }
}
.catenavi ul{display: flex; column-gap:20px; font-size:1.2rem;
    li{
        padding: 0 15px;
        border: 1px solid var(--color-point2);
        border-radius: 5px;
        line-height: 2rem;
        cursor: pointer;
    }
    li:hover{
        background-color: var(--color-point2);
        color:var(--color-text)
    }
    .on{
        border: 1px solid var(--color-point);
        background-color: var(--color-point);
        color:white;
    }
    @media (max-width: 991px){
        column-gap:10px;
        li{
            padding:0 5px;
            font-size:1rem;
        }
    }
}
span{
    font-size: 1rem;
}
.portitem{
    width: 90%;
    margin:0 2% 3% 40px; 
    display: flex;
    flex-wrap:wrap;
    border:1px solid #777;
    border-radius: 10px;
    padding:20px;
    box-sizing: border-box;
    @media (max-width: 991px){width:100%; margin:0 0 30px; padding:10px;}
    img{
        flex-basis: 55%;
        width:55%;
        height: auto;
        object-fit: cover;
        object-position: top center;
        border:1px solid #ddd;
        @media (max-width: 991px){flex-basis:100%; width: 100%;}
    }
    h3{
        margin:0;
        font-size:1.5rem;
    }
    .porttext{
        flex-basis:40%;
        width:40%;
        box-sizing: border-box;
        padding: 30px 10px;
        margin-left: 10px;
        @media (max-width: 991px){flex-basis:100%; width:100%; padding:20px 0; margin: 0;}
    }
    .tags, .link{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0;
        margin:20px 0;
        gap:8px;
        font-size: 1rem;
        @media (max-width: 991px){margin : 10px 0;}
    }
    .tagob{
        padding: 2px 10px;
        line-height: 1.5rem;
        border: 1px solid var(--color-point2);
        border-radius: 15px;
        color: var(--color-text);
    }
    .desc{
        margin:20px 0;
        font-size:14px;
        p{
            line-height: 1.5rem;
            margin:0 0 0.8rem 0;
        }
    }
    a{
        padding: 4px 16px;
        line-height: 1.5rem;
        background-color: var(--color-point2);
        border-radius: 15px;
        color:#fffcf4;
    }
    a:hover, a:active{
        background-color: var(--color-point2);
    }
}
.goback{
    background: var(--color-point);
    padding: 0 10px;
    overflow: hidden;
    button{
        font-size:5rem;
        padding:5px 10px;
        border:0;
        background:transparent;
        position:relative;
        color:white;
        z-index: 5;
        transition: all 1s;
        cursor: pointer;
        span{
            color:var(--color-point);
            font-size:5rem;
        }
        &::before{
            content:'';
            position:absolute;
            top:0; right:0; bottom:0; left:0px;
            z-index: -1;
            background: white;
            transform:skew(-45deg);
            opacity: 0;
            @media (max-width: 991px){opacity: 1;}
        }
        @media (max-width: 991px){
            font-size:2rem;
            padding-right:30px;
            color: var(--color-point);
            span{
                font-size:3rem;
            }
    }
    }
    button:hover{
        padding-right:100px;
        color: var(--color-point);
        &::before{
            opacity:1
        }
        @media (max-width: 991px){padding-right: 30px;}
    }
}
</style>