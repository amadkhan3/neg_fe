<template>
    <div class="container-fluid singup-page">
        <div id="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="login_main_logo">
                            <h1>
                                <a href="/">
                                    <img alt="Logo" src="../../assets/images/login/main-logo.png"></img>
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
            <div class="col-md-6-custom-gray">
                <div class="main_body_login_page">
                    <div class="login_left_image">
                        <img alt="Layers" src="../../assets/images/login/layers.png"></img>
                    </div>
                </div>
            </div>
            <div class="col-md-6-custom-empty">
                <div class="custom_sign_fm">
                    <h3>Sign Up</h3>
                    <p class="sign-notes">Follow the sign up proccess to establish your Nest Egg Guru account. After
                        your account is established, you will be prompted to choose the apps you wish to try.
                        <strong>Your credit card will not be charged if you cancel within 30 days</strong>
                        . Don’t worry – we make it easy to cancel the free trial, if you choose to do so.</p>
                </div>


                <!--<input v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" placeholder="Password" ref="password">-->
                <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->

                <!--<input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Password, Again" data-vv-as="password">-->


                <form>
                    <div class="form-group custom_laBel mb-3">
                        <label for="exampleInputEmail1">User email (this is your Business email address)</label>
                        <input aria-describedby="emailHelp" class="form-control custom_frm_contral"
                               id="exampleInputEmail1" type="email"
                               name="email" placeholder=""
                               v-model="advisorEmail" v-validate="'required|email|uniqueEmail'">
                        <span class="error-text">{{ errors.first('email')}}</span>
                    </div>

                    <div class="form-group custom_laBel mb-3">
                        <label for="companyName">Company Name</label>
                        <input class="form-control custom_frm_contral"
                               id="companyName" name="companyName"
                               placeholder="" type="text"
                               v-model="companyName" v-validate="'required|uniqueCompanyName'">
                        <span class="error-text">{{ errors.first('companyName')}}</span>
                    </div>

                    <!--<div class="form-group custom_laBel mb-3">-->
                        <!--<label for="companyName">First Name</label>-->
                        <!--<input class="form-control custom_frm_contral"-->
                               <!--id="firstName" name="firstName"-->
                               <!--placeholder="" type="text"-->
                               <!--v-model="firstName" v-validate="'required'">-->
                        <!--<span class="error-text">{{ errors.first('firstName')}}</span>-->
                    <!--</div>-->

                    <!--<div class="form-group custom_laBel mb-3">-->
                        <!--<label for="companyName">Last Name</label>-->
                        <!--<input class="form-control custom_frm_contral"-->
                               <!--id="lastName" name="lastName"-->
                               <!--placeholder="" type="text"-->
                               <!--v-model="lastName" v-validate="'required'">-->
                        <!--<span class="error-text">{{ errors.first('lastName')}}</span>-->
                    <!--</div>-->

                    <div class="form-group custom_laBel mb-3 position-relative">
                        <label>Password</label>
                        <input :class="{'is-danger': errors.has('password')}" class="form-control custom_frm_contral"
                               ref="password"
                               name="password" v-model="password"
                               placeholder="Password"
                               type="text" v-if="isShowPassword"
                               v-validate="'required|min:8|alpha_num|leastOneNumberAndLetter'"/>

                        <input :class="{'is-danger': errors.has('password')}" class="form-control custom_frm_contral"
                               name="password"
                               placeholder="Password" v-else
                               v-model="password"
                               ref="password" type="password"
                               v-validate="'required|min:8|alpha_num|leastOneNumberAndLetter'"/>
                        <span class="error-text mt-1 clearfix">{{ errors.first('password') ? 'Password is not valid' : ''}}</span>
                        <span class="error-text mt-1">Password MUST contain at least one upper case letter, one lower case letter, and one number. No special characters.</span>
                        <div @click="isShowPassword = !isShowPassword" class="eyes_icon cursor-pointer">
                            <img alt="Eye" src="../../assets/images/login/icon-eyes.png"/>
                        </div>
                    </div>
                    <div class="form-group custom_laBel mb-3 position-relative">
                        <label>Re-type Password</label>
                        <input class="form-control custom_frm_contral" name="password_confirmation" placeholder=""
                               type="text"
                               v-if="isShowPassword" v-validate="'required|confirmed:password'"/>
                        <input class="form-control custom_frm_contral" name="password_confirmation" placeholder=""
                               v-else
                               type="password" v-validate="'required|confirmed:password'"/>
                        <span class="error-text">{{ errors.first('password_confirmation') ? 'The confirmation password does not match.' : ''}}</span>
                        <div @click="isShowPassword = !isShowPassword" class="eyes_icon cursor-pointer">
                            <img alt="Eye" src="../../assets/images/login/icon-eyes.png"/>
                        </div>
                    </div>

                    <div class="clear"></div>
                    <div class="form-check custom_frm_check text-center" style="margin-top: 30px;">
                        <button @click="back" class="cursor-pointer custm_btn custm_btn_grey mr-4" type="button">Back
                        </button>
                        <button @click="onSubmit" class="custm_btn custm_btn_green" type="button">Sign up</button>
                    </div>
                    <div class="problems_registering">
                        <span> Problems registering? Please contact <a href="mailto:Guru@NestEggGuru.com"> Guru@NestEggGuru.com </a></span>
                    </div>

                </form>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<style lang="scss" src="./Signup.scss"></style>

<script src="./Singup.js">
</script>
