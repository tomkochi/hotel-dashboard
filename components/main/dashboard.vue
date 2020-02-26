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
          :exc="~~(Math.random() * 20 + 20)"
          :dlx="~~(Math.random() * 15 + 15)"
        />
      </div>
      <!-- /.bookings -->
      <div class="total-revenue section">
        <total-revenue-section
          :maximum="43500"
          :lastW="~~(Math.random() * 30000 + 10000)"
          :thisW="~~(Math.random() * 30000 + 10000)"/>
      </div>
      <!-- /.total-revenue -->
    </div>
    <!-- /.row-1 -->
    <div class="row-2 d-flex">
      <div class="web section">
        <web-section :data="webData"/>
      </div>
      <!-- /.web -->
      <div class="phone section">
        <phone-section
          :data="callData"/>
      </div>
      <!-- /.phone -->
      <div class="emails section">
        <emails-section :data="emailData"/>
      </div>
      <!-- /.emails -->
    </div>
    <!-- /.row-2 -->
    <div class="row-3 d-flex">
      <div class="visit-by-region section">
        <visit-by-region-section :data="visitData"/>
      </div>
      <!-- /.visit-by-region -->
      <div class="facebook section">
        <facebook-section :data="fbData"/>
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
    data () {
      return {
        webData: [...Array(7)].map(() => ~~(Math.random() * 1000 + 300)),
        callData: {
          total: Math.floor(Math.random() * 40 + 20),
          missed: Math.floor(Math.random() * 15 + 1),
          circle: 'Karnataka',
          lastCall: {
            time: `0${~~(Math.random() * 8 + 1)}:${~~(Math.random() * 39 + 19)} ${Math.random() > 0.5 ? 'am' : 'pm'}`,
            duration: `00:0${~~(Math.random() * 8)}:${~~(Math.random() * 45 + 10)}`,
          },
        },
        emailData: {
          total: Math.floor(Math.random() * 100 + 100),
          lastUpdated: `0${~~(Math.random() * 8 + 1)}:${~~(Math.random() * 39 + 19)} ${Math.random() > 0.5 ? 'am' : 'pm'}`,
        },
        visitData: {
          labels: ['Oman', 'Dubai', 'India', 'Sri Lanka', 'Singapore'],
          data: [...Array(5)].map(() => ~~(Math.random() * 600 + 200)),
        },
        fbData: {
          followers: ~~(Math.random() * 2000 + 2000),
          target: ~~(Math.random() * 2 + 4) * 1000,
          max: ~~(Math.random() * 3 + 6) * 1000,
        }
      }
    },
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
    height: calc(100vh - 200px);
    .row-1, .row-2 {
      height: 25%;
      min-height: 190px;
      margin-bottom: 20px;
    }
    .row-3 {
      height: 50%;
      min-height: 360px;
      margin-bottom: 20px;
    }
    .row-1, .row-2, .row-3 {
      .section {
        background: #ffffff;
        width: calc((100% - 40px) / 3);
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
