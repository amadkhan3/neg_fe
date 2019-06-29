<template>
    <div class="container">
    <div id="wrapper">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="login_main_logo">
                        <h1>
                            <router-link to="/">
                                <a href="#">
                                    <img alt="Logo" src="../../assets/images/login/main-logo.png"/>
                                </a>
                            </router-link>
                        </h1>
                </div>
            </div>
        </div>
    </div>
    <div class="clear"></div>
        <div class="col-md-6-custom-gray">
            <div class="main_body_login_page">
                <div class="login_left_image">
                    <img src="../../assets/images/login/layers.png" alt="Layers">
                </div>
            </div>
        </div>
        <div class="col-md-6-custom-empty">
                <div class="custom_sign_fm">
                    <h3>Sign In</h3>
                </div>
            <form ref="form">
                    <div class="form-group custom_laBel">
                        <label for="exampleInputEmail1">User name (this is your Business email address)</label>
                        <input aria-describedby="emailHelp" class="form-control custom_frm_contral"
                               id="exampleInputEmail1" name="username" placeholder=""
                               type="text" v-model="userName" v-validate="'required'">
                        <span class="error">{{ errors.first('username') }}</span>
                    </div>
                    <div class="form-group custom_laBel position-relative">
                        <label>Password</label>
                        <input class="form-control custom_frm_contral" id="password" name="password" placeholder=""
                               type="text"
                               v-if="isShowPassword" v-model="password" v-validate="'required'">

                        <input class="form-control custom_frm_contral" id="password" name="password" placeholder=""
                               v-else
                               type="password" v-model="password" v-validate="'required'">

                        <div @click="isShowPassword = !isShowPassword" class="eyes_icon cursor-pointer">
                            <img src="../../assets/images/login/icon-eyes.png" alt="Eye">
                        </div>
                        <span class="error">{{ errors.first('password') }}</span>
                    </div>
                    <!-- Default checked -->
                    <div class="custom-control custom-checkbox flt_left_custom">
                        <label class="container_e">Login Stay  signed in
                            <input checked="checked" type="checkbox" v-model="rememberMe">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <span class="flt_right_custom">
                        <a href="#">Forgot your Password ?
                        </a>
                    </span>
                    <div class="clear"></div>
                <div class="clear error text-center" v-if="isLoginFail">Wrong username/password</div>
                    <div class="form-check text-center mt-4">
                        <button @click="back" class="cursor-pointer custm_btn custm_btn_grey mr-4" type="button">Back
                        </button>
                        <button @click="login" class="custm_btn custm_btn_green" type="button">Login</button>
                    </div>
                </form>
        </div>
        <div class="clear"></div>
    </div>
</div>
</template>

<style lang="scss" src="./Login.scss"></style>
<script src="./Login.js"></script>
