<template>
  <div class="container">
    <Header>
      <h2>Hi!</h2>
    </Header>
    <h3>
      My name is Rasmus Svanberg. I am a software developer with a bachelors degree in Computer Science.
    </h3>
    <h3>
      I graduated in June of 2021, and have since worked as a full stack developer at ROL Ergo AB in Jönköping, Sweden,
      where I am involved in developing the ROL Intelligent Office system, or ROL IO for short.
    </h3>
    <h3>
      In my sparetime I am currently enjoying experimenting in the game engine Unity way to much.
      Oh, and I am developing a game! It is yet to be announced, but is currently being worked on as a multiplayer co-op game.
    </h3>
    <h3>
      This website is just one of my projects!<br>
      Made using the framework Vue.JS and the CSS pre-processor Sass.
    </h3>
    <h3>
      Read more about it <a href="">here!</a> (not implemented)
      <!-- Check out the public repository <a href="https://github.com/ZyntaaX/zyntaax.github.io">here!</a> -->
    </h3>
    <br>
    <!-- Docs: htth3s://github.com/anuraghazra/github-readme-stats -->
    <!-- <div class="badge-container">
      <h3>Here's my GitHub stats from my personal account!</h3>
      <img
        alt="Loading stats..."
        :src="gitBadgeUrl"
        class="badge"
      >
    </div> -->
    <img
      class="bitmojji"
      src="/images/bitmoji_wave.png"
      alt="Bitmoji waving"
    >
  </div>
</template>

<script>

import Header from '@/components/headers/header.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
  },
  computed: {
    gitBadgeUrl() {
      return 'https://github-readme-stats.vercel.app/api?username=zyntaax&count_private=true&show_icons=true&hide=stars,contribs&theme=dracula&include_all_commits=true&custom_title=My Github Stats';
    },
  },
};
</script>

<style lang="scss" scoh3ed>

  .container {
    text-align: center;

    h1 {
      color: var(--white);
    }

    h3 {
      text-align: left;
      color: var(--text-color-primary);
      font-weight: 400;
    }

    .bitmojji {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-right: 20%;
      // margin-bottom: 5rem;
    }
  }
  .badge-container {
    // border: 1px solid gray;
    // padding: 10px;
    // border-radius: 10px;
    display: inline-flex;
    .badge {
      width: 75%;
      margin: 0 auto;
    }
  }

</style>
