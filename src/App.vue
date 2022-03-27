<template>
  <div class="app">
    <NavigationBar />
    <div class="side-bar">
      <Sidebar />
    </div>
    <div class="notice-box">
      <GlobalNotice />
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="fill" />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>

import NavigationBar from '@/views/navigationbar/navigationbar.view.vue';
import Sidebar from '@/components/sidebar/sidebar.component.vue';
import Footer from '@/components/footer/footer.component.vue';
import GlobalNotice from '@/components/global.notice/global.notice.component.vue';

export default {
  components: {
    NavigationBar,
    Sidebar,
    Footer,
    GlobalNotice,
  },
};

</script>

<style lang="scss" scoped>

  .app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .fill {
    flex-grow: 1;
  }

  .main {
    width: 600px;
    margin: 0 auto;
  }

  .side-bar, .notice-box {
    position: absolute;
    padding: 10px;
    width: 200px;
    margin: 0 auto;
    top: 15%;

    &.side-bar {
      margin-left: 16%;
    }

    &.notice-box {
      margin-right: 16%;
      right: 0;
    }
  }

  .footer {
    text-align: left;
  }

</style>
