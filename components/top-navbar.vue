<template>
  <div class="head d-flex justify-content-between align-items-center">
    <div class="left d-flex align-items-center">
      <div @click="$bus.$emit('menu-button')" class="menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="19" viewBox="0 0 29 19">
          <g fill="none" fill-rule="evenodd" stroke="#D3D3D3" stroke-width="2">
            <path d="M0 0L28.824 0M0 8L28.824 8M0 17L28.824 17" transform="translate(0 1)"/>
          </g>
        </svg>
      </div>
      <!-- /.menu -->
      <a href="/" class="restaurant-logo">
        <img src="@/assets/images/logo.svg" width="140" alt="">
      </a>
      <!-- /.restaurant-logo -->
      <div class="v-line"></div>
      <div class="date-time">
        <div class="date">Friday 26 Feb</div>
        <div class="time">8:43 PM</div>
      </div>
      <!-- /.date-time -->
      <div class="period d-flex align-items-center">
        Last 7 Days
        <div class="dropdown-arrow d-flex align-items-center justify-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7">
            <path fill="none" fill-rule="evenodd" stroke="#34CEAC" stroke-width="2" d="M539 40L545.071 44.76 551.141 40" transform="translate(-538 -39)"/>
          </svg>
        </div>
        <!-- /.dropdown-arrow -->
      </div>
    </div>
    <!-- /.left -->
    <div class="right d-flex align-items-center">
      <div class="v-line"></div>
      <div class="hotel">
        <div class="name">Ocean Palms</div>
        <div class="location">Bangalore</div>
      </div>
      <!-- /.hotel -->
      <div class="v-line"></div>
      <div class="user d-flex align-items-center">
        <div class="pic">
          <img :src="`https://randomuser.me/api/portraits/med/men/${Math.floor(Math.random() * 50 + 50)}.jpg`" width="50" height="50" class="rounded-circle" alt="">
        </div>
        <div class="user-info">
          <div class="name">Tinjo Thomas</div>
          <div class="role">Admin</div>
        </div>
        <!-- /.user-info -->
      </div>
      <!-- /.user -->
      <div class="settings">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27">
          <path fill="none" fill-rule="evenodd" stroke="#D3D3D3" stroke-width="2" d="M16.638 25.617a.988.988 0 01-.74-.332l-1.825-2.056c-.264.011-.53.011-.789 0l-1.825 2.056a.987.987 0 01-1.17.233l-1.906-.92a.902.902 0 01-.065-.028l-1.938-.936a.989.989 0 01-.545-1.06l.469-2.703a9.286 9.286 0 01-.495-.621l-2.741-.145a.989.989 0 01-.912-.767l-.47-2.064a.855.855 0 01-.018-.069l-.478-2.098a.989.989 0 01.488-1.086l2.408-1.324c.048-.26.107-.517.176-.769L2.666 8.694a.989.989 0 01.03-1.19l1.34-1.685.03-.036.01-.01 1.329-1.666a.99.99 0 011.155-.295L9.09 4.87c.242-.129.49-.248.744-.357l.723-2.55c.12-.425.509-.719.951-.719h4.341c.443 0 .831.294.951.72l.723 2.551c.252.108.5.226.741.355l2.53-1.06a.989.989 0 011.155.296l1.341 1.68c.01.01.018.021.027.032l1.34 1.685c.274.345.287.83.03 1.19l-1.592 2.23c.07.254.128.513.176.776l2.406 1.316a.989.989 0 01.49 1.089l-.965 4.233a.989.989 0 01-.912.768l-2.744.145c-.156.213-.321.419-.492.617l.468 2.707a.989.989 0 01-.544 1.06l-1.938.935a.902.902 0 01-.066.028h0l-1.906.92a.987.987 0 01-.43.1h0zm-2.96-7.626a4.513 4.513 0 01-4.509-4.508 4.513 4.513 0 014.508-4.508 4.515 4.515 0 014.511 4.508 4.515 4.515 0 01-4.51 4.508h0z"/>
        </svg>
      </div>
      <!-- /.settings -->
    </div>
    <!-- /.right -->
  </div>
  <!-- /.head -->
</template>
<script>
  export default {
    name: 'top-navbar'
  }
</script>
<style scoped lang="scss">
  .head {
    height: 80px;
    padding: 0 24px;
    background: #ffffff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
    .v-line {
      height: 55px;
      width: 2px;
      background: #ededed;
    }
    .left {
      .menu {
        cursor: pointer;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        svg g {
          -webkit-transition: all 0.2s;
          -moz-transition: all 0.2s;
          -ms-transition: all 0.2s;
          -o-transition: all 0.2s;
          transition: all 0.2s;
        }
        &:hover {
          svg g {
            stroke: #1fa386;
          }
        }
      }
      .restaurant-logo {
        margin: 0 27px 0 57px;
      }
      .date-time {
        margin-left: 27px;
        .date {
          font-size: 15px;
          font-weight: 500;
          color: #747474;
        }
        .time {
          font-size: 15px;
          font-weight: 300;
          color: #747474;
        }
      }
      .period {
        margin-left: 38px;
        height: 30px;
        background: #f8f7f6;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
        padding: 0 4px 0 16px;
        font-size: 15px;
        color: #747474;
        .dropdown-arrow {
          width: 24px;
          height: 24px;
          margin-left: 10px;
          background: transparent;
          -webkit-border-radius: 11px;
          -moz-border-radius: 11px;
          border-radius: 12px;
          -webkit-transition: background-color 0.2s;
          -moz-transition: background-color 0.2s;
          -ms-transition: background-color 0.2s;
          -o-transition: background-color 0.2s;
          transition: background-color 0.2s;
          cursor: pointer;
          &:hover {
            background: #ffffff;
          }
        }
      }
    }
    .right {
      .hotel {
        margin: 0 38px;
        .name {
          font-size: 15px;
          font-weight: 500;
          color: #747474;
        }
        .location {
          font-size: 15px;
          font-weight: 300;
          color: #747474;
        }
      }
      .user {
        .pic {
          margin: 0 25px;
        }
        .user-info {
          .name {
            font-size: 15px;
            font-weight: 500;
            color: #747474;
          }
          .role {
            font-size: 15px;
            font-weight: 300;
            color: #747474;
          }
        }
      }
      .settings {
        margin-left: 57px;
        cursor: pointer;
      }
    }
  }
</style>
