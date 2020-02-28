<template>
  <div class="search-hotels">
    <div class="search d-flex align-items-center justify-content-between">
      <div @click="$bus.$emit('hide-search')">
        <svg
          class="close-me"
          xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12">
          <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="square">
            <path d="M0 0L11.314 11.314M11.314 0L0 11.314" transform="translate(1)"/>
          </g>
        </svg>
      </div>
      <input type="text" class="form-control" placeholder="Search for hotels">
      <svg class="do-search" xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19">
        <g fill="none" fill-rule="evenodd" stroke="#D3D3D3" transform="translate(1 1)">
          <circle cx="6.5" cy="6.5" r="6.5"/>
          <path stroke-linecap="square" d="M10.5 12.5L14.5 17.5"/>
        </g>
      </svg>
    </div>
    <!-- /.search -->
    <div class="hotels">
      <div class="hotel">
        <div class="left">
          <img class="rounded-circle" src="https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg" alt="">
        </div>
        <div class="right">
          <div class="name">Ocean Palms</div>
          <div class="location">Bangalore</div>
        </div>
        <!-- /.right -->
      </div>
      <!-- /.hotel -->
      <div class="hotel">
        <div class="left">
          <img class="rounded-circle" src="https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg" alt="">
        </div>
        <div class="right">
          <div class="name">Orchid Hotels</div>
          <div class="location">Bangalore</div>
        </div>
        <!-- /.right -->
      </div>
      <!-- /.hotel -->
      <div class="hotel">
        <div class="left">
          <img class="rounded-circle" src="https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg" alt="">
        </div>
        <div class="right">
          <div class="name">Our Native Village</div>
          <div class="location">Mysoor</div>
        </div>
        <!-- /.right -->
      </div>
      <!-- /.hotel -->
      <div class="hotel">
        <div class="left">
          <img class="rounded-circle" src="https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg" alt="">
        </div>
        <div class="right">
          <div class="name">Kumarakam Lake Resort</div>
          <div class="location">Kottayam</div>
        </div>
        <!-- /.right -->
      </div>
      <!-- /.hotel -->
      <div class="hotel">
        <div class="left">
          <img class="rounded-circle" src="https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg" alt="">
        </div>
        <div class="right">
          <div class="name">Wonderla</div>
          <div class="location">Kochi</div>
        </div>
        <!-- /.right -->
      </div>
      <!-- /.hotel -->
      <div class="hotel">
        <div class="left">
          <img class="rounded-circle" src="https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg" alt="">
        </div>
        <div class="right">
          <div class="name">Stay Simple</div>
          <div class="location">Delhi</div>
        </div>
        <!-- /.right -->
      </div>
      <!-- /.hotel -->
      <div class="hotel">
        <div class="left">
          <img class="rounded-circle" src="https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg" alt="">
        </div>
        <div class="right">
          <div class="name">Justa Resorts </div>
          <div class="location">Delhi</div>
        </div>
        <!-- /.right -->
      </div>
      <!-- /.hotel -->
    </div>
    <!-- /.hotels -->
  </div>
  <!-- /.search-hotels -->
</template>

<script>
  export default {
    name: 'search-hotels',
  }
</script>

<style scoped lang="scss">
  .search-hotels {
    height: calc(100vh - 80px);
    width: 340px;
    background: #747474;
    .search {
      height: 50px;
      padding: 20px;
      background: #6d6969;
      input {
        width: calc(100% - 97px);
        height: 30px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        background: transparent;
        outline: none;
        border: none;
        font-size: 15px;
        font-weight: 300;
        color: #e4e4e4;
        &::placeholder {
          color: #d3d3d3;
        }
        &:-ms-input-placeholder {
          color: #d3d3d3;
        }
        &::-ms-input-placeholder {
          color: #d3d3d3;
        }
        &:hover, &:active, &:focus
        {
          outline: 0 !important;
          -webkit-appearance:none;
          box-shadow: none !important;
        }
      }
      .close-me, .do-search {
        cursor: pointer;
      }
    }
    .hotels {
      padding: 19px;
      .hotel {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        cursor: pointer;  
        &:not(:last-of-type) {
          border-bottom: 1px solid #6d6969;
        }
        &:hover {
          .right .name, .right .location {
            color: white;
          }
        }
        .left {
          margin-right: 17px;
          img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
        }
        .right {
          .name {
            font-size: 15px;
            font-weight: 500;
            color: #d3d3d3;
          }
          .location {
            font-size: 15px;
            font-weight: 300;
            color: #d3d3d3;
          }
          .name, .location {
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }
        }
      }
    }
  }
</style>
