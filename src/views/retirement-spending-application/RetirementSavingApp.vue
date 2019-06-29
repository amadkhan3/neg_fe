<template>
    <app :companyData="companyData" appType="2"></app>
</template>

<script>
    import app from './App.vue'

    export default {
        name: "CalculatorApp",
        components: {
            app
        },
        props: {
            companyData: {}
        }
    }
</script>

<style scoped>

</style>
