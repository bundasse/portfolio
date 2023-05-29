<template>
    <div id="contact">
        <h2>연락하기</h2>
        <p class="subtext">Contact</p>
        <p>제 이야기가 좀 더 듣고 싶거나,<br/>
하고 싶은 이야기가 있다면 편하게 연락해주세요!</p>
        <form ref="form" @submit.prevent="sendEmail">
            <div>
                <div class="sec2">
                    <label for="user_name">이름<span>Name</span></label>
                    <input type="text" name="name" id="user_name" required>
                </div>
                <div class="sec2">
                    <label for="user_email">메일 주소<span>E-mail address</span></label>
                    <input type="text" name="email" id="user_email" required>
                </div>
                <div class="sec1">
                    <label for="message">메세지 내용<span>Message</span></label>
                    <textarea id="message" name="message" required></textarea>
                </div>
            </div>
        <p :style="mailSuccess === true? 'display:block':'display:none'" class="reply">메시지가 성공적으로 전송되었습니다. 1~2일 이내에 확인 후 답변드리겠습니다.</p>
        <button class="submit">전송</button>
        </form>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';
export default {
    name:"ContactCom",
    data() {
        return {
            mailSuccess:false
        }
    },
    methods: {
        sendEmail() {
          emailjs.sendForm('service_hsa8g5f', 'template_f150vie', this.$refs.form, 'O6tORrpyEOpeDORY1')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.mailSuccess = true

        }, (error) => {
            console.log('FAILED...', error.text);
            alert("메일 전송에 실패했습니다.")
        });
    }
    },
}
</script>
<style lang="scss">
@import "@/styles/mixins.scss";
#contact{
    padding:3% 0;
    width:100%;
    min-height: 100vh;
    height:100%;
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
.reply{
    color:#FF7F5B;
}
@include title;
@include buttons(250px);
</style>