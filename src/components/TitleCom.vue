<template>
    <div class="wrap">
        <div>
            <div>
                <h2>타이틀 한마디</h2>
                <p class="subtext">Front-end developer</p>
                <p>
                    누구나 쉽게 쓸 수 있는 웹을 만들고 싶은<br/>
                    프론트엔드 개발자 조영민입니다.
                </p>
            </div>
        </div>
        <button class="submit">연락처로 바로가기</button>
    </div>
</template>
<script>
export default {
    name: "TitleCom"
}
</script>
<style lang="scss">
@import "@/styles/mixins.scss";
.wrap{
    padding:10% 0;
    width:100%;
    height:100vh;
}
.wrap>div{
    display: flex;
    height: 30%;
}
.wrap>div div{
    flex-basis: 40%;
}
@include title;
p{font-size: 1.2em}
@include buttons(0);
</style>