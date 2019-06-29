<template>
<footer>
    <div class="row align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-flex p-2">
                    ©2018. ALL RIGHTS RESERVED by NEST EGG GURU
                </div>

                <div class="col-lg-6">
                    <ul class="nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/media">Media</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/faq">FAQ</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>


import Utils from '@/Utils/Utils.js'

<script>
export default {
    name: "Footer",
    data () {
        return {
            isReadyLogin: false
        }
    },

    mounted () {
    }
}
</script>
