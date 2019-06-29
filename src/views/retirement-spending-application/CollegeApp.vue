<template>
    <app :companyData="companyData" appType="1"></app>
</template>

<script>
    import app from './App.vue'

    export default {
        name: "CalculatorApp",
        components: {
            app: app
        },
        props: {
            companyData: {}
        }
    }
</script>

<style scoped>

</style>
