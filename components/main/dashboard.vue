<template>
  <div class="main">
    <div class="row-1 d-flex">
      <div class="updates section">
        <updates-section/>
      </div>
      <!-- /.updates -->
      <div class="bookings section">
        <bookings-section
          :total="70"
          :exc="Math.floor(Math.random() * 20 + 20)"
          :dlx="Math.floor(Math.random() * 15 + 15)"
        />
      </div>
      <!-- /.bookings -->
      <div class="total-revenue section">
        <total-revenue-section
          :maximum="43500"
          :lastW="Math.floor(Math.random() * 30000 + 10000)"
          :thisW="Math.floor(Math.random() * 30000 + 10000)"/>
      </div>
      <!-- /.total-revenue -->
    </div>
    <!-- /.row-1 -->
    <div class="row-2 d-flex">
      <div class="web section">
        <web-section/>
      </div>
      <!-- /.web -->
      <div class="phone section">
        <phone-section/>
      </div>
      <!-- /.phone -->
      <div class="emails section">
        <emails-section/>
      </div>
      <!-- /.emails -->
    </div>
    <!-- /.row-2 -->
    <div class="row-3 d-flex">
      <div class="visit-by-region section">
        <visit-by-region-section/>
      </div>
      <!-- /.visit-by-region -->
      <div class="facebook section">
        <facebook-section/>
      </div>
      <!-- /.facebook -->
      <div class="referral-traffic section">
        <referral-traffic-section/>
      </div>
      <!-- /.referral-traffic -->
    </div>
    <!-- /.row-3 -->
  </div>
  <!-- /.main -->
</template>

<script>

  import UpdatesSection from "./sections/updates";
  import BookingsSection from "./sections/bookings";
  import TotalRevenueSection from "./sections/total-revenue";
  import WebSection from "./sections/web";
  import PhoneSection from "./sections/phone";
  import EmailsSection from "./sections/emails";
  import VisitByRegionSection from "./sections/visit-by-regions";
  import FacebookSection from "./sections/facebook";
  import ReferralTrafficSection from "./sections/referral-traffic";
  export default {
    name: 'dashboard',
    components: {
      ReferralTrafficSection,
      FacebookSection,
      VisitByRegionSection,
      EmailsSection,
      PhoneSection,
      WebSection,
      TotalRevenueSection,
      BookingsSection,
      UpdatesSection
    }
  }
</script>

<style scoped lang="scss">
  .main {
    .row-1, .row-2 {
      height: 190px;
      min-height: 25%;
    }
    .row-3 {
      height: 360px;
      min-height: 50%;
    }
    .row-1, .row-2, .row-3 {
      .section {
        background: #ffffff;
        width: calc((100% - 40px) / 3);
        height: calc(100% - 20px);
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        border: 1px solid #ededed;
        padding: 16px 24px;
        &:nth-child(2) {
          margin-left: 20px;
          margin-right: 20px;
        }
      }
    }
  }
</style>
