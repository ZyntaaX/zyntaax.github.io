<template>
  <NavigationBar />
  <div class="side-bar">
    <Sidebar />
  </div>
  <router-view class="main" />
</template>

<script>

import NavigationBar from '@/views/navigationbar/navigationbar.view.vue';

import Sidebar from '@/views/sidebar/sidebar.component.vue';

export default {
  components: {
    NavigationBar,
    Sidebar,
  },
};

</script>

<style lang="scss" scoped>

  .side-bar {
    position: absolute;
    padding: 10px;
    // background-color: blue;
    width: 10%;
    margin: 30px 0 0 16%;
  }

  .main {
    margin: 30px 35% 0 35%;
    width: 30%;
    // background-color: red;
  }

</style>
