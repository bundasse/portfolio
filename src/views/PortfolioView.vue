<template>
    <div class="mainWrap">
    뒤로가기
        <div class="catenavi">
            <ul>
                <li @click="$store.state.catename = '전체'">전체</li>
                <li @click="$store.state.catename = '클론코딩'">클론코딩</li>
                <li @click="$store.state.catename = '웹앱'">웹앱</li>
                <li @click="$store.state.catename = '홈페이지'">홈페이지</li>
                <li @click="$store.state.catename = '미니 프로젝트'">미니 프로젝트</li>
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
                    TOOLS: <span class="tagob" v-for="el2 in e.tools" :key="el2">{{ el2 }}</span>
                </p>
                <div class="desc">
                    <p v-for="el in e.desc" :key="el">{{ el }}</p>
                </div>
                <div class="link">
                    <a :href="e.originLink" class="moveBtn">원본 사이트</a>
                    <a :href="e.siteLink" class="moveBtn">구현 사이트</a>
                    <a :href="e.docu" class="moveBtn">작업 관련 문서</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
            return this.Worklist.portlist.filter((e)=>{
                if (this.$store.state.catename !== "전체"){
                    return e.category === this.$store.state.catename
                }else{
                    return e.category
                }
            })
        }
    }
}
</script>
<style lang="scss">
.mainWrap{flex:80%; margin:0; margin-left:250px; padding:0 2%; box-sizing: border-box;}
.catenavi{
    ul{display: flex; gap:20px;
        li{
            padding: 0 15px;
            border: 1px solid #90BF87;
            line-height: 1.8rem;
            cursor: pointer;
        }
        li:hover{
            background-color: #90BF87;
            color:white;
        }
    }
}
span{
    font-size: 1rem;
}
.portitem{
    width: 90%;
    display: flex;
    flex-wrap:wrap;
    border:1px solid lightgray;
    border-radius: 8px;
    padding: 1%;
    margin-bottom: 3%;
    .portcate{
        color:#AAAAAA;
    }
    img{
        width: 55%;
        height: 500px;
        object-fit: cover;
        object-position: top center;
    }
    h3{
        margin:0;
        font-size:1.5rem;
    }
    .porttext{
        width:40%;
        margin-left: 3%;
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
        padding: 2px 12px;
        line-height: 1.5rem;
        border: 1px solid #FF7F5B;
        border-radius: 15px;
        color: #666666;
    }
    .desc{
        margin:28px 0;
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
</style>