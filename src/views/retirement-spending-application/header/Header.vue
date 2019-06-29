<template>
  <b-container  class="retirement-spending-application-header" v-if="companyData">
    <nav class="header">
      <b-container>
        <b-row>
          <b-col cols="5">
            <div class="d-inline-block mr-2" v-if="companyData.isHaveCompanyAvatar">
              <img :alt="companyData.user.companyName" :src="`/be/api/public/getUserCompanyAvatar/${companyData.user.id}.png`" class="rounded-circle position-relative" style="top: -4px;">
            </div>
            <div class="d-inline-block">
              <div class="dongphuclop">{{companyData.user.companyName}}</div>
              <div>
                <a class="link-color" href="http://nestteggguru.com">
                  {{(companyData.user.website === null || companyData.user.website === '') ? 'https://nesteggguru.com' : companyData.user.website}}
                </a>
              </div>
            </div>

          </b-col>
          <b-col class="container-display-inline-right" cols="7">
            <label class="active-indicator">{{title}}</label>
          </b-col>
        </b-row>
      </b-container>
    </nav>
  </b-container>
</template>

<script src="./Header.js">
</script>

<style lang="scss" src="./Header.scss"></style>
