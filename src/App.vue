<template>
  <div class="main-page">
    <NavigationBar />
    <div class="side-bar">
      <Sidebar />
    </div>
    <router-view class="main" />
  </div>
  <Footer />
</template>

<script>

import NavigationBar from '@/views/navigationbar/navigationbar.view.vue';
import Sidebar from '@/components/sidebar/sidebar.component.vue';
import Footer from '@/components/footer/footer.component.vue';

export default {
  components: {
    NavigationBar,
    Sidebar,
    Footer,
  },
};

</script>

<style lang="scss" scoped>

  .main-page {
    height: 94vh;
    // background-color: red;
    overflow-y: scroll;
    // margin-bottom: 50px;
  }

  .side-bar {
    position: absolute;
    padding: 10px;
    // background-color: blue;
    width: 10%;
    margin: 30px 0 0 16%;
  }

  .main {
    margin: 0 35% 0 35%;
    width: 30%;
    // background-color: red;
  }

</style>
