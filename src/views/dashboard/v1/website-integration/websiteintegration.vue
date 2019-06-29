<template>

    <div class="content-inner website-integration" v-if="companyData">

        <p class="top-tagline">Your unique Nest Egg Guru URL: <a :href="domainUrl" target="_blank">{{domainUrl}}</a></p>

        <p>You may begin using the URL to run your Nest Egg Guru app(s) immediately from your browser. However,
            subscribers are strongly encouraged to incorporate the apps into their websites using the embed code.</p>

        <div class="embed">
            <h2>EMBED CODE</h2>
            <p>Copy the code for your subscription and paste it in an email to your website designer. You should work
                with you designer to determine how and where on your website the apps should appear. Subscribers to the
                3-app bundle may present the apps on their websites with a single CTA or with separate CTAs for each
                app.</p>
            <p>It is recommended that the apps appear on your Home page and that they are introduced with a compelling
                call - to - action. it is recommended that you do not refer to them as "calculators"</p>
        </div>

        <div class="copy_code_area" v-if="companyData.activeCollegeSavingApp">
            <p>Embed code for College Savings App</p>
            <div class="form-group">
                <textarea :value="collegeSubText" class="form-control" name="college_saving"></textarea>
                <input class="btn btn-change btn-copy" name="back" type="button" v-clipboard="collegeSubText" value="Copy Code"/>
            </div>
        </div>

        <div class="copy_code_area" v-if="companyData.activeRetirementSavingApp">
            <p>Embed code for Retirement Savings App</p>
            <div class="form-group">
                <textarea :value="retirementSavingSubText" class="form-control" name="retirement_saving"></textarea>
                <input class="btn btn-change btn-copy" name="back" type="button" v-clipboard="retirementSavingSubText" value="Copy Code"/>
            </div>
        </div>

        <div class="copy_code_area" v-if="companyData.activeRetirementSpendApp">
            <p>Embed code for Retirement Spending App</p>
            <div class="form-group">
                <textarea :value="retirementSpendingSubText" class="form-control" name="retirement_spending"></textarea>
                <input class="btn btn-change btn-copy" name="back" type="button" v-clipboard="retirementSpendingSubText" value="Copy Code"/>
            </div>
        </div>

    </div>

</template>


<script src="./websiteintegration.js"></script>
<style lang="scss" src="./websiteintegration.scss"></style>


