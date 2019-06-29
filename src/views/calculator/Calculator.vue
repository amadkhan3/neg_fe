<template>
    <div class="container" id="app">
        <div v-if="isValid">
            <router-view :companyData="companyData"></router-view>
            <!--<router-view v-if="appType === 1" path="/college-saving-application"></router-view>-->
            <!--<router-view v-if="appType === 2" path="/retirement-saving-application"></router-view>-->
            <!--<router-view v-if="appType === 3" path="/retirement-spending-application"></router-view>-->
        </div>
    </div>
</template>

<script src="./Calcualtor.js"></script>
