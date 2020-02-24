<template>
  <div class="d-flex">
    <div class="search d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19">
        <g fill="none" fill-rule="evenodd" stroke="#FFF" transform="translate(1 1)">
          <circle cx="6.5" cy="6.5" r="6.5"/>
          <path stroke-linecap="square" d="M10.5 12.5L14.5 17.5"/>
        </g>
      </svg>
    </div>
    <!-- /.search -->
    <div
      @mouseenter="paused = true"
      @mouseleave="paused = false"
      class="marquee d-flex align-items-center">
      <marquee-text :paused="paused" :duration="marqueeDuration">
        <div class="d-flex">
          <div
            v-for="item in marquee"
            class="marquee-item d-flex align-items-center"
            :class="{ info: item.type === 'info',  warning: item.type === 'warning', error: item.type === 'error' }">
            <div class="time d-flex align-items-center">{{ item.time }}</div>
            <div class="text d-flex align-items-center">{{ item.text}}</div>
          </div>
        </div>
      </marquee-text>
    </div>
    <!-- /.marquee -->
    <div class="notification d-flex align-items-center justify-content-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22">
        <g fill="#1FA386" fill-rule="evenodd">
          <path d="M15.543 9.26c0-4.305-2.164-6.233-3.913-7.087C11.62.978 10.65.012 9.453.012c-1.204 0-2.179.975-2.179 2.178 0 .018.002.035.003.053-1.722.887-3.776 2.823-3.776 7.017 0 0 .49 6.374-3.3 6.282v1.89H18.843v-1.89c-3.79.093-3.3-6.282-3.3-6.282zM5.985 18.543c.126 1.885 1.69 3.375 3.606 3.375s3.48-1.49 3.606-3.375H5.985z" transform="translate(0 .07)"/>
        </g>
      </svg>
    </div>
    <!-- /.notification -->
  </div>
  <!-- /.d-flex -->
</template>
<script>
  import MarqueeText from 'vue-marquee-text-component'

  export default {
    data () {
      return {
        marquee: [
          { text: 'You have 12 new followers on twitter', time: '', type: 'info' },
          { text:'Avijith commented on G+', time:'7:02 PM', type:'info' },
          { text:'Transaction failure', time:'7:05 PM', type:'error' },
          { text:'Wow, Just got a new booking', time:'8.02 PM', type:'info' },
          { text:'Dheeraj liked ...', time:'5:42 PM', type:'info' },
          { text:'Weekly target not met', time:'6.20 PM', type:'warning' },
        ],
        paused: false,
      }
    },
    computed: {
      marqueeDuration () {
        return (this.marquee.length / 6) * 10
      }
    },
    components: {
      MarqueeText
    }
  }
</script>
<style scoped lang="scss">
  .search {
    height: 40px;
    width: 75px;
    background: #1fa386;
  }
  .marquee {
    height: 40px;
    width: calc(100vw - 60px - 75px);
    background: #34ceac;
    .marquee-item {
      height: 40px;
      color: #ffffff;
      padding: 0 25px 0 15px;
      border-right: 1px solid #ededed;
      cursor: pointer;
      &:hover .text {
        color: #1fa386;
        -webkit-transition: color 0.2s;
        -moz-transition: color 0.2s;
        -ms-transition: color 0.2s;
        -o-transition: color 0.2s;
        transition: color 0.2s;
      }
      .time {
        padding: 3px 10px;
        font-size: 10px;
        font-weight: 400;
        margin-right: 12px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
      }
      &.info .time {
        background: transparent;
      }
      &.warning .time {
        background: orange;
      }
      &.error .time {
        background: #fe5a7e;
      }
      .text {
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
  .notification {
    height: 40px;
    width: 60px;
    background: #34ceac;
  }
</style>
