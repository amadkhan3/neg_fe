<template>
    <div class="content-inner security-area">
        <form class="update_pass">
            <div>
                <h4>Use this page to update your <span>Nest Egg Guru</span><br/> password.</h4>
            </div>
            <div class="form-group">
                <label for="password">Your password:</label>
                <input aria-describedby="emailHelp" class="form-control" id="oldPassword" name="oldPassword"
                       placeholder=""
                       type="password"
                       v-model="oldPassword" v-validate="'required'"/>

                <span class="error-text mt-1 clearfix" v-if="errorMsg">{{errorMsg}}</span>

            </div>
            <div class="new_pass">
                <h5>Enter the new password <i class="fa fa-info-circle"></i></h5>
                <div class="pop_message">
                    <p>Password must contain at least one upper case and lower case letter and at least one number</p>
                </div>
            </div>
            <div class="form-group">
                <label for="newPassword">New password:</label>
                <input class="form-control" id="newPassword" name="newPassword" ref="newPassword"
                       v-model="password" v-validate="'required|min:8|alpha_num|leastOneNumberAndLetter'"
                       placeholder="" type="password"/>
                <div class="error-text mt-1 clearfix">{{ errors.first('newPassword') ?
                    'Password MUST contain at least one upper case letter, one lower case letter, and one number. No special characters.'
                    :
                    ''}}
                </div>

            </div>
            <div class="form-group">
                <label for="confirmPassword">Retype password:</label>
                <input aria-describedby="emailHelp" class="form-control" id="confirmPassword"
                       name="password_confirmation"
                       v-model="confirmPassword" v-validate="'required|confirmed:newPassword'"
                       placeholder="" type="password"/>
                <span class="error-text">{{ errors.first('password_confirmation')}}</span>
            </div>
            <span class="notes">Note: Changing your password will log you out !</span>
            <div class="submit-wrap">
                <input @click="onSubmit" class="btn btn-change" name="change_password" type="button"
                       value="Change Password"/>
            </div>
        </form>
    </div>
</template>

<script src="./security.js">
</script>

<style lang="scss" src="./security.scss"></style>
