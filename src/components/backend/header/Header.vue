<template>
    <nav class="header-area" id="sidebar">
        <div class="sidebar-header text-center">
            <router-link class="dashboard-logo" tag="a" to="/dashboard/user"></router-link>
        </div>
        <ul class=" components main-list-item">

            <li>
                <a aria-expanded="false" class="dropdown-toggle welcome-menu position-relative" data-toggle="collapse"
                   href="#homeSubmenu">
                    <router-link active-class="active" exact-active-class="active" tag="span" to="/dashboard/user">
                        <i class="welcome-img"></i> Welcome
                    </router-link>


                </a>

                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <router-link class="collapse-item" tag="li" to="/dashboard/user/security">
                        <a>Login and Security</a>
                    </router-link>
                    <router-link class="collapse-item" tag="li" to="/dashboard/user/accounts"><a href="">Account
                        info</a></router-link>
                    <router-link class="collapse-item" tag="li" to="/dashboard/user/payments"><a href="">Payment
                        info</a></router-link>
                </ul>

            </li>
            <router-link tag="li" to="/dashboard/subscription">
                <a href="#">
                    <i class="subscription"></i>
                    <span>Manage Subcription</span>
                </a>
            </router-link>

            <router-link tag="li" to="/dashboard/integration">
                <a href="#">
                    <i class="website"></i>
                    <span>Website Integration</span>
                </a>
            </router-link>

            <router-link tag="li" to="/dashboard/leadgen">
                <a href="#">
                    <i class="lead_gen"></i>
                    <span>Lead Gen</span>
                </a>
            </router-link>

            <router-link tag="li" to="/dashboard/sampleCTAs">
                <a href="#">
                    <i class="sample_cta"></i>
                    <span>Sample CTAs</span>
                </a>
            </router-link>

            <router-link class="end-nav" tag="li" to="/">
                <a href="#">
                    <img src="../../../assets/imgpsh_fullsize_anim.png" alt="Logo" width="160px" />
                </a>
            </router-link>
        </ul>
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


<style src="./Header.scss" lang="scss"></style>
