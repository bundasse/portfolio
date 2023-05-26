<template>
    <div id="contact">
        <h2>연락하기</h2>
        <p class="subtext">Contact</p>
        <p>제 이야기가 좀 더 듣고싶거나,<br/>
하고싶은 이야기가 있다면 편하게 연락해주세요!</p>
        <form action="">
            <div>
                <div class="sec2">
                    <label for="cName">이름<span>Name</span></label>
                    <input type="text" v-model="cName" id="cName">
                </div>
                <div class="sec2">
                    <label for="cMail">메일 주소<span>E-mail address</span></label>
                    <input type="text" v-model="cMail" id="cMail">
                </div>
                <div class="sec1">
                    <label for="cText">메세지 내용<span>Message</span></label>
                    <textarea id="cText" v-model="cText"></textarea>
                </div>
            </div>
        </form>
        <button class="submit" @click="mailTo()">전송</button>
    </div>
</template>
<script>
export default {
    name:"ContactCom",
    data() {
        return {
            cName:"",
            cMail:"",
            cText:""
        }
    },
    methods: {
        mailTo(){
            alert("!")
        }
    },
}
</script>
<style lang="scss">
@import "@/styles/mixins.scss";
#contact{
    padding:3% 0;
    width:100%;
    height:80vh;
    box-sizing: border-box;
}
form>div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 600px;
    margin: 50px 0 10px;
    row-gap: 10px;
    .sec2{
        flex-basis: 49%;
        label{
            width: 100%;
            font-size:1.5rem;
            span{
                font-size: 0.8em;
                color:lightgray;
            }
        }
        input{
            width: 100%;
            padding:0.5rem 0;
            font-size: 1.2rem;
            border:1px solid #cccccc;
        }
        
    }
    .sec1{
        flex-basis: 100%;
        label{
            width:100%;
            font-size:1.5rem;
            span{
                font-size: 0.8em;
                color:lightgray;
            }
        }
        textarea{
            width:100%;
            padding:0.5rem 0;
            font-size: 1.2rem;
            border:1px solid #cccccc;
        }
    }
}
@include title;
@include buttons(250px);
</style>