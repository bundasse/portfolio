<template>
    <div class="mainWrap">
        <div class="goback">
            <button @click="$router.go(-1)">&#8636; <span>뒤로가기</span></button>
        </div>
        <div class="catenavi">
            <ul>
                <li :class="$store.state.catename === '전체' && 'on'" @click="$store.state.catename = '전체'">전체</li>
                <li :class="$store.state.catename === '클론코딩' && 'on'" @click="$store.state.catename = '클론코딩'">클론코딩</li>
                <li :class="$store.state.catename === '웹앱' && 'on'" @click="$store.state.catename = '웹앱'">웹앱</li>
                <li :class="$store.state.catename === '홈페이지' && 'on'" @click="$store.state.catename = '홈페이지'">홈페이지</li>
                <li :class="$store.state.catename === '미니 프로젝트' && 'on'" @click="$store.state.catename = '미니 프로젝트'">미니 프로젝트</li>
            </ul>
        </div>
        <div v-for="(e,index) in CateItem" :key="index" class="portitem">
            <img v-if="e.img !== ''" :src="require(`@/assets${e.img}`)" :alt="e.title">
            <div class="porttext">
                <span class="portcate">{{ e.category }}</span>
                <h3>{{ e.title }}</h3>
                <p class="days">{{ e.date }} / {{ e.howlong }}일</p>
                <ul class="tags">
                    <li v-for="el in e.keyword" :key="el"><span class="tagob">{{ el }}</span></li>
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
    created() {
        window.scrollTo({top: 0, behavior: 'smooth'})
        AOS.init();
    },
}
</script>
<style lang="scss" scoped>
.mainWrap{flex:80%; margin:0; padding:0; margin-left:280px; box-sizing: border-box;}
.catenavi{
    ul{display: flex; gap:20px; font-size:1.2rem; margin-left:2%;
        li{
            padding: 0 15px;
            border: 1px solid #90BF87;
            border-radius: 5px;
            line-height: 2rem;
            cursor: pointer;
        }
        li:hover{
            background-color: #90BF87;
            color:white;
        }
        .on{
            border: 1px solid #FF7F5B;
            background-color: #FF7F5B;
            color:white
        }
    }
}
span{
    font-size: 1rem;
}
.portitem{
    width: 90%;
    margin:0 2% 3% 2%; 
    display: flex;
    flex-wrap:wrap;
    border:1px solid #777;
    border-radius: 10px;
    padding:20px;
    .portcate{
        color:#AAAAAA;
    }
    img{
        width: 55%;
        height: auto;
        object-fit: cover;
        object-position: top center;
        border:1px solid #ddd;
    }
    h3{
        margin:0;
        font-size:1.5rem;
    }
    .porttext{
        width:40%;
        box-sizing: border-box;
        padding: 30px 10px;
        margin-left: 10px;
    }
    .tags, .link{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0;
        margin:0;
        gap:0 8px;
        font-size: 1rem;
    }
    .tagob{
        padding: 2px 10px;
        line-height: 1.5rem;
        border: 1px solid #FF7F5B;
        border-radius: 15px;
        color: #666666;
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
        background-color: #90BF87;
        border-radius: 15px;
        color:#fffcf4;
    }
    a:hover{
        background-color: #FF7F5B;
    }
}
.goback{
    background: #FF7F5B;
    margin-bottom: 20px;
    padding: 0 10px;
    button{
        font-size:5rem;
        padding:5px 10px;
        border:0;
        background:transparent;
        position:relative;
        color:white;
        z-index: 5;
        transition: all 1s;
        span{
            color:#FF7F5B;
            font-size:5rem;
        }
        &::before{
            content:'';
            position:absolute;
            top:0; right:0; bottom:0; left:0px;
            z-index: -1;
            background:white;
            transform:skew(-45deg);
            opacity: 0;
        }
    }
    button:hover{
        padding-right:100px;
        color: #FF7F5B;
        &::before{
            opacity:1
        }
    }
}
</style>