<template>
    <div>
        <ul class="buttons">
            <li>
                <button @click="this.$store.commit('dark')"><font-awesome-icon :icon="this.$store.state.darkOn === true? 'fa-sun':'fa-moon'"/></button>
            </li>
            <li>
                <button @click="scrollTop()"><font-awesome-icon icon="fa-arrow-up"/></button>
            </li>
        </ul>

    </div>
    <footer class="footerWrap">
        © 2023 by Youngmin Cho. All rights reserved.
    </footer>
</template>
<script>
export default {
    name: "FooterView",
    methods: {
        scrollTop(){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    },
}
</script>
<style scoped lang="scss">
.buttons{
    position: fixed;
    bottom:20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    row-gap: 10px;
    z-index: 50;
    li button{
        width:4rem;
    height:4rem;
    color:var(--color-background);
    border:1px solid var(--color-point);
    border-radius: 50%;
    font-size:3rem;
    text-align: center;
    background: var(--color-point);
    @media (max-width: 991px){
        width:3rem;
        height: 3rem;
        font-size:2rem;
    }
    }
}
    .footerWrap{
        width:100%;
        padding: 3em 0 3em 2% ;
        box-sizing: border-box;
        background-color: var(--color-point2);
        opacity: 0.5;
        color:var(--color-text)
    }
</style>