<template>
    <div class="dashboard dashboard-area">
        <div class="security-wrap skin-blue sidebar-mini security" id="app">

            <div class="wrapper">

                <Header></Header>

                <div id="content">

                    <nav class="navbar navbar-expand navbar-light bg-white topbar static-top">

                        <button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop">
                            <i class="fa fa-bars"></i>
                        </button>


                        <div class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100">
                            <div class="title-3">Nest Egg Guru Admin</div>
                        </div>

                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item dropdown no-arrow mx-1 has-border-left">
                                <p class="powered_by">Powered by <span>Nest Egg Guru</span></p>
                            </li>

                            <li class="nav-item dropdown no-arrow">
                                <a style="background-color:#ffffff !important;" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle"
                                   data-toggle="dropdown" href="#" id="userDropdown" role="button" >
                                    <span class="mr-2 d-none d-lg-inline text-gray-600 small name">{{name}}</span>
                                </a>

                                <div style="width: 204px; height: 215px; padding:0;margin-top: 16px;margin-right: -65px;" aria-labelledby="userDropdown"
                                     class="dropdown-menu dropdown-menu-right shadow animated--grow-in">
                                    <a class="dropdown-item" style="color: #56c57b; background-color:#EEF5EE;" href="#">
                                        <div style="padding-top:10px;padding-bottom:10px;"><i class="fas fa-user-circle fa-sm fa-fw mr-2" style="font-size:18px;"></i>
                                        Profile</div>
                                    </a>
                                    <div style="margin:0;" class="dropdown-divider"></div>
                                    <a class="dropdown-item" style="color: #5f5f5f;" href="#">
                                        <div style="padding-top:10px;padding-bottom:10px;"><i class="fas fa-list-alt fa-sm fa-fw mr-2" style="font-size:18px;"></i>
                                        Activity Log</div>
                                    </a>
                                    <div style="margin:0;" class="dropdown-divider"></div>
                                    <a class="dropdown-item" style="color: #5f5f5f;" href="#">
                                        <div style="padding-top:10px;padding-bottom:10px;"><i class="fas fa-cog fa-sm fa-fw mr-2" style="font-size:18px;"></i>
                                        Settings</div>
                                    </a>
                                    <div style="margin:0;" class="dropdown-divider"></div>
                                    <a @click="logout" class="dropdown-item" style="color: #5f5f5f;" data-target="#logoutModal"
                                       data-toggle="modal" href="#">
                                        <div style="padding-top:10px;padding-bottom:10px;"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2" style="font-size:18px;"></i>
                                        Logout</div>
                                    </a>
                                </div>
                            </li>

                            <li class="nav-item dropdown no-arrow avatar">
                                <img :src="`/be/api/public/getUserAvatar.png?time=${latestTime}`" class="img-profile rounded-circle" height="40"
                                     width="40"/>
                            </li>

                        </ul>

                    </nav>

                    <div class="tab_bar col-xs-12">
                        <div class="inner-list horizontal-menu">
                            <ul>
                                <router-link tag="li" to="/dashboard/admin">
                                    Subscription
                                </router-link>

                                <router-link tag="li" to="#">
                                    Admin Login and security
                                </router-link>

                                <router-link tag="li" to="#">
                                    Admin User Permissions
                                </router-link>

                                <router-link tag="li" to="#">
                                    Third Party Systems
                                </router-link>

                                <router-link tag="li" to="#">
                                    APIs
                                </router-link>
                            </ul>
                        </div>
                    </div>

                    <div class="inner-wrapper">
                        <router-view :userInfo="userInfo"></router-view>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script src="./DashboardAdmin.js">
</script>

<style src="./DashboardAdmin.scss" lang="scss"></style>
