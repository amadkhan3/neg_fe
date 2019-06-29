<template>
<nav id="nav" v-show="$store.state.isShowNavBar" class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="container">
        <router-link class="navbar-brand" to="/">
            <img src="../../assets/logo.png" class="d-inline-block align-top" alt=""/>
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto ml-auto text-center d-block">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Media
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/video">Videos</router-link>
                        <router-link class="dropdown-item" to="/blog">Blog</router-link>
                        <router-link class="dropdown-item" to="/articles">Articles</router-link>
                    </div>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/faq">FAQ</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
            </ul>

            <div class="form-inline my-2 my-lg-0">
                <router-link class="nav-link" to="/login">Login</router-link>
                <router-link tag="button" class="btn btn-primary btn-lg" to="/signup">Sign Up</router-link>
            </div>
        </div>
    </div>
</nav>
</template>

import Utils from '@/Utils/Utils.js'

<script>
export default {
    name: "Header",
    data () {
        return {
            isReadyLogin: false
        }
    },

    mounted () {
    },

    methods: {
        logout () {
            Utils.logout()
        }
    }
}
</script>
