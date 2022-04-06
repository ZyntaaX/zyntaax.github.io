<template>
  <router-link :to="route">
    <h3> {{ title }} </h3>
    <div
      class="underline"
      :class="{'selected': isSelected}"
    />
  </router-link>
</template>

<script>

export default {
  name: 'NavigationItemComponent',
  data() {
    return {
      isSelected: true,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};

</script>

<style lang="scss" scoped>

  // a {
  //   // font-weight: bold;
  //   // color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }

  nav {

    a {
      width: fit-content;
      text-decoration: none;

      // &.router-link-exact-active {
      &.router-link-active {
        h3 {
          color: var(--primary-color);
        }
      }

      &:hover {
          cursor: pointer;

        .underline {
          opacity: 1;
          transform: scaleX(1);
        }

        h3 {
          color: var(--primary-color-light);
        }
      }

      // &:active {
      //   .underline {
      //     transform: scaleX(1);
      //   }
      // }
    }

    h3 {
      margin: 0;
      padding: 0 20px 0 20px;

      -webkit-transition: all 025s ease;
      -moz-transition: all 0.25s ease;
      transition: all 0.25s ease;
    }

    .underline {
        margin: 0 10% 0 10%;
        width: 80%;
        opacity: 0;
        transform: scaleX(0);
        height: 4px;
        background-color: var(--primary-color);

        -webkit-transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        transition: all 0.25s ease;
    }
  }

</style>
