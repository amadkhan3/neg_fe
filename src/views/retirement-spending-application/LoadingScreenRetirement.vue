<template>
    <div class="content-inner loading-screen">
        <div class="loader">
            <div class="content-loader">
                <p>Based on your information,</p>
                <p>Nest Egg Guru is running 5,000 simulations...</p>
            </div>
            <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style="font-size:80px; color:#ffffff;"></i>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /sr
    import HelloWorld from "@/components/HelloWorld.vue";
    import Header from '@/components/backend/header/Header.vue';
    import Footer from '@/components/backend/footer/Footer.vue';

    export default {
        name: "LoadingScreen",
        components: {
            HelloWorld,
            Header,
            Footer
        }
    };

</script>
<style lang="scss" src="./LoadingScreenRetirement.scss"></style>
