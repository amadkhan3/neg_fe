<template>

    <div class="content-inner accounts text-center">

        <b-modal centered class="message-modal" hide-footer hide-header ref="successModal" size="lg">
            <div class="modal-title text-center">
                <span class="">Successfully!</span>
            </div>
            <div class="content-msg">
                Your account infomation is update successfully.
            </div>

            <div class="footer-btns text-center">
                <button @click="gotoCard" class="btn btn-primary btn-change" type="button">OK</button>
            </div>
        </b-modal>

        <div class="wrapper-content-inner ">
            <div class="row">
                <p class="col-sm-12 text-center small-font">USE THIS LINK TO BEGIN RUNNING YOUR WHITE LABEL SUBSCRIPTION
                    TO NEST EGG GURU <a :href="domainUrl" target="_blank">{{domainUrl}}</a></p>
            </div>

            <input id="userId" name="userId" placeholder="" ref="userId" type="hidden" v-model="userInfo.id" v-validate="'required'" />

            <div class="row profile-img-area">
                <div class="no-pading col-sm-6 float-left">
                    <div class="round-img">
                        <img :src="userInfo.avatar" class="img-profile rounded-circle" v-if="userInfo.avatar" />
                        <img :src="`/be/api/public/getUserAvatar/${userInfo.id}.png`" class="img-profile rounded-circle" v-else/>
                        <my-upload :headers="headers" :height="70"
                                   :params="params"
                                   :width="70"
                                   @crop-success="cropUserAvatarSuccess"
                                   @crop-upload-fail="cropUploadFail"
                                   @crop-upload-success="cropUploadSuccess"
                                   field="img"
                                   img-format="png"
                                   langType="en"
                                   v-if="showUserAvatar"
                                   v-model="showUserAvatar"></my-upload>

                    </div>
                    <div class="name-area">
                        <h4 class="bold-text">{{userInfo.displayName}}</h4>
                        <a @click="showUserAvatar=true" class="green-small-text" href="#">Change Photo</a>
                    </div>
                </div>
                <div class="no-padded col-sm-6 float-left">
                    <div class="round-img">
                        <img :src="userInfo.companyAvatar" class="img-profile rounded-circle" v-if="userInfo.companyAvatar" />
                        <img :src="`/be/api/public/getUserCompanyAvatar/${userInfo.id}.png`" class="img-profile rounded-circle" v-else/>
                        <my-upload :headers="headers" :height="70"
                                   :params="params"
                                   :width="70"
                                   @crop-success="cropCompanyAvatarSuccess"
                                   @crop-upload-fail="cropUploadFail"
                                   @crop-upload-success="cropUploadSuccess"
                                   field="img"
                                   img-format="png"
                                   langType="en"
                                   v-if="showCompanyAvatar"
                                   v-model="showCompanyAvatar"></my-upload>
                    </div>
                    <div class="name-area">
                        <h4 class="bold-text">Company Logo</h4>
                        <a @click="showCompanyAvatar = true" class="green-small-text" href="#">Change Photo</a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="assigned">Client # <span>(Assigned by Nest Egg Guru)</span></label>
                        <input aria-describedby="assigned" class="form-control" id="assigned" name="assigned"
                               disabled placeholder="" v-model="userInfo.companyDomain"
                               type="text"/>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-sm-6 ">
                    <div class="form-group">
                        <label for="firstname">First Name *</label>
                        <input aria-describedby="firstname" class="form-control" id="firstname" name="firstname"
                               placeholder="" v-model="userInfo.firstName"
                               type="text"/>
                    </div>
                </div>
                <div class="col-sm-6 ">
                    <div class="form-group">
                        <label for="lastname">Last Name *</label>
                        <input aria-describedby="lastname" class="form-control" id="lastname" name="lastname"
                               placeholder="" v-model="userInfo.lastName"
                               type="text"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6 ">
                    <div class="form-group">
                        <label for="company">Company Name *</label>
                        <input aria-describedby="company" class="form-control" id="company" name="company"
                               placeholder="" v-model="userInfo.companyName" v-validate="'required'"
                               type="text"/>

                        <span class="error-text">{{ errors.first('company') ? 'This value is invalid' : ''}}</span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="phone">Phone Number *</label>
                        <input aria-describedby="phone" class="form-control" id="phone" name="phone" placeholder=""
                               v-model="userInfo.phone"
                               type="text"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="advisoremail">Advisor Email <span class="red-color">*</span> <span>(This is your login ID)</span></label>
                        <input aria-describedby="advisoremail" class="form-control" id="advisoremail"
                               name="advisoremail" v-model="userInfo.advisorEmail"
                               v-validate="'required|email|uniqueEmailForEdit:userId'"
                               placeholder="" type="text"/>

                        <span class="error-text">{{ errors.first('advisoremail') ? 'This email is invalid' : ''}}</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <label for="shortprofile">Add a short personal profile or information about your
                            practice.</label>
                        <textarea class="form-control" maxlength="456"
                                  name="shortprofile" v-model="userInfo.personalProfile" v-validate="'max:456'"></textarea>
                        <span :class="errors.first('shortprofile') ? 'error-text':''" class="float-right">{{userInfo.personalProfile ? 425 - userInfo.personalProfile.length : 425 }} Characters Remaining</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <label for="shortprofile">Add your firm’s disclosure here. This information will automatically
                            appear on the results report.</label>
                        <textarea class="form-control" id="shortprofile" maxlength="3200"
                                  name="shortprofile" v-model="userInfo.firmDisclosure" v-validate="'max:3200'"></textarea>
                        <span :class="errors.first('shortprofile') ? 'error-text':''" class="float-right">{{userInfo.firmDisclosure ? 3200 - userInfo.firmDisclosure.length : 3200 }} Characters Remaining</span>
                    </div>
                </div>

            </div>

            <div class="border-gray professional-area">
                <div class="row">
                    <div class="col-sm-6 float-left">
                        <div class="form-group">
                            <label for="Website">Website</label>
                            <input aria-describedby="Website" class="form-control" id="Website" name="Website"
                                   placeholder="" v-model="userInfo.website"
                                   type="text"/>
                        </div>
                    </div>
                    <div class="col-sm-6 float-left">
                        <div class="form-group">
                            <label for="Designation">Professional Designation(s) e.g., CFP, MBA, J.D., Ph.d, CFA</label>
                            <input aria-describedby="Designation" class="form-control" id="Designation"
                                   name="Designation" v-model="userInfo.professionalInfo"
                                   placeholder="" type="text"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="advisorphone">Advisor Cell Phone</label>
                            <input aria-describedby="advisorphone" class="form-control" id="advisorphone"
                                   name="advisorphone" placeholder=""
                                   type="tel" v-model="userInfo.advisorPhone"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 float-left">
                        <div class="form-group">
                            <label for="address1">Address 1</label>
                            <input aria-describedby="address1" class="form-control" id="address1" name="address1"
                                   v-model="userInfo.address1"
                                   placeholder="" type="text"/>
                        </div>
                    </div>
                    <div class="col-sm-6 float-left">
                        <div class="form-group">
                            <label for="address2">Address 2</label>
                            <input aria-describedby="address2" class="form-control" id="address2" name="address2"
                                   v-model="userInfo.address2"
                                   placeholder="" type="text"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 float-left">
                        <div class="form-group">
                            <label for="City">City</label>
                            <input aria-describedby="City" class="form-control" id="City" name="City" placeholder=""
                                   v-model="userInfo.city"
                                   type="text"/>
                        </div>
                    </div>
                    <div class="col-sm-6 float-left">
                        <div class="row">
                            <div class="col-sm-6 no-padding float-left">
                                <div class="form-group">
                                    <label for="State">State</label>
                                    <input aria-describedby="State" class="form-control" id="State" name="State"
                                           placeholder="" v-model="userInfo.state"
                                           type="text"/>
                                </div>
                            </div>
                            <div class="col-sm-6 float-left">
                                <div class="form-group">
                                    <label for="zipcode">Zip Code</label>
                                    <input aria-describedby="zipcode" class="form-control" id="zipcode" name="zipcode"
                                           v-model="userInfo.zipCode"
                                           placeholder="" type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="submit-wrap">
                <input @click="onSubmit" class="btn btn-change" name="save" type="submit" value="Save"/>
            </div>
        </div>

    </div>

</template>


<script src="./accounts.js">
</script>

<style lang="scss" src="./accounts.scss"></style>
