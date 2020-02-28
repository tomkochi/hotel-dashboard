<template>
  <div
    @mouseenter="$bus.$emit('show-menu-text')"
    @mouseleave="$bus.$emit('hide-menu-text')"
    class="side-bar d-flex flex-column">
    <div class="menu-item-wrapper">
      <div class="menu-item">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20">
            <g fill="none" fill-rule="evenodd" stroke="#9C979E" stroke-width="1.5">
              <path d="M21.682 9.046c0 1.862-4.8 3.37-10.722 3.37S.237 10.908.237 9.046c0-1.86 4.8-3.37 10.723-3.37 5.922 0 10.722 1.51 10.722 3.37h0z" transform="translate(1 1)"/>
              <path d="M14.204 9a3.244 3.244 0 11-6.488 0 3.244 3.244 0 016.488 0h0zM7.884 3.241L7.884.237.237.237.237 5.677M15.21 3.241L15.21.237 22.857.237 22.857 5.677M7.884 14.973L7.884 17.977.237 17.977.237 12.538M15.21 14.973L15.21 17.977 22.857 17.977 22.857 12.538" transform="translate(1 1)"/>
            </g>
          </svg>
        </div>
        <div class="text">Quick Look</div>
      </div>
      <!-- /.menu-item -->
    </div>
    <!-- /.menu-item-wrapper -->
    <div class="menu-item-wrapper">
      <div class="menu-item">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22">
            <g fill="none" fill-rule="evenodd" stroke="#9C979E" stroke-width="1.5">
              <path d="M23.15 11.315v5.569a2.952 2.952 0 01-2.951 2.952H3.152A2.952 2.952 0 01.2 16.884V6.868a2.952 2.952 0 012.952-2.952h8.867" transform="translate(1 1)"/>
              <path d="M2.481 6.893L8.513 13 12.311 9.946 19.901 17.109M19.43 9.043a4.422 4.422 0 114.421-4.422h-5.68" transform="translate(1 1)"/>
            </g>
          </svg>
        </div>
        <div class="text">Web</div>
      </div>
      <!-- /.emu-item -->
    </div>
    <!-- /.menu-item-wrapper -->
    <div class="menu-item-wrapper">
      <div class="menu-item">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25">
            <g fill="none" fill-rule="evenodd" stroke="#9C979E" stroke-width="1.5">
              <g>
                <path d="M8.4 7.268L10.722 3.73 7.543.551M5.027 15.185L2.705 18.723 5.884 21.903M.012 3L10.722 3" transform="translate(1) translate(13.75 .112)"/>
              </g>
              <path d="M13.762 7L19.117 7M13.762 10L16.455 10" transform="translate(1)"/>
              <g>
                <path d="M16.455 17L24.437 17M8.672 4.945L8.634 1.69A1.26 1.26 0 007.092.476L5.778.778l-3.042.699h0A3.121 3.121 0 00.393 5.218l3.553 15.465a2.744 2.744 0 003.29 2.059l.367-.084 3.043-.7 1.282-.294a1.26 1.26 0 00.847-1.788l-1.451-2.93a1.26 1.26 0 00-1.412-.67l-.383.088a1.261 1.261 0 01-1.51-.946L6.27 7.808a1.26 1.26 0 01.946-1.51l.478-.11a1.26 1.26 0 00.978-1.243h0z" transform="translate(1) translate(0 1.362)"/>
              </g>
            </g>
          </svg>
        </div>
        <div class="text">Phone</div>
      </div>
      <!-- /.menu-item -->
    </div>
    <!-- /.menu-item-wrapper -->
    <div class="menu-item-wrapper">
      <div class="menu-item">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 27 19">
            <g fill="none" fill-rule="evenodd" stroke="#9C979E" stroke-width="1.5">
              <path d="M.21 16.947L24.339 16.947 24.339.21.21.21zM3.448 14.062L3.448 8.578M6.897 14.062L6.897 11.32M9.483 14.062L9.483 12.691" transform="translate(1 1)"/>
              <path d="M2.858 2.672L12.274 8.578 21.647 2.672" transform="translate(1 1)"/>
            </g>
          </svg>
        </div>
        <div class="text">Email</div>
      </div>
      <!-- /.menu-item -->
    </div>
    <!-- /.menu-item-wrapper -->
    <div class="menu-item-wrapper">
      <div class="menu-item">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22">
            <g fill="none" fill-rule="evenodd" stroke="#9C979E" stroke-width="1.5">
              <path d="M7.035 3.636a3.398 3.398 0 11-6.797 0 3.398 3.398 0 016.797 0h0zM21.21 3.636a3.398 3.398 0 11-6.796 0 3.398 3.398 0 016.796 0h0zM7.035 16.415a3.398 3.398 0 11-6.797 0 3.398 3.398 0 016.797 0h0zM21.21 16.415a3.398 3.398 0 11-6.796 0 3.398 3.398 0 016.796 0h0zM15.29 5.909L6.158 14.142" transform="translate(1 1)"/>
            </g>
          </svg>
        </div>
        <div class="text">Social Media</div>
      </div>
      <!-- /.menu-item -->
    </div>
    <!-- /.menu-item-wrapper -->
  </div>
  <!-- /.side-bar -->
</template>

<script>
  export default {
    name: 'side-bar',
    data () {
      return {
        showMenuText: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .side-bar {
    padding-top: 30px;
    height: 100%;
    overflow: hidden;
    width: 170px;
    .menu-item-wrapper {
      width: 100%;
      .menu-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #504852;
          -webkit-border-radius: 20px;
          -moz-border-radius: 20px;
          border-radius: 20px;
          margin: 16px 0 16px 18px;
        }
        .text {
          font-size: 13px;
          color: #9b9b9b;
          -webkit-transition: all 0.2s;
          -moz-transition: all 0.2s;
          -ms-transition: all 0.2s;
          -o-transition: all 0.2s;
          transition: all 0.2s;
          padding: 0 16px;
        }
        .icon svg g {
          -webkit-transition: all 0.2s;
          -moz-transition: all 0.2s;
          -ms-transition: all 0.2s;
          -o-transition: all 0.2s;
          transition: all 0.2s;
        }
        &:hover {
          svg g {
            stroke: #108de2;
          }
          .text {
            color: #108de2;
          }
        }
      }
    }
  }
</style>
