<template>
  <div class="container">
    <h6>
      © 2022 Rasmus Svanberg
    </h6>
    <div class="filler" />
    <button
      v-if="isLoggedIn"
      @click="signOut"
      class="signout-button"
    >
      Sign out
    </button>
  </div>
</template>

<script>

import User from '@/utilities/authentication.manager';

import Event, { EVENT_USER_CHANGED } from '@/utilities/event';

export default {
  data() {
    return {
      User,
      isLoggedIn: User.isLoggedIn,
    };
  },
  methods: {
    async signOut() {
      await this.User.signOut()
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    Event.$on(EVENT_USER_CHANGED, (user) => {
      console.log('USER CHANGED: ', user);
      this.isLoggedIn = user.isLoggedIn;
    });
  },
};

</script>

<style lang="scss" scoped>

  .container {
    background-color: var(--background-color-dark);
    width: 100%;
    text-align: left;
    padding: 1px;
    display: inline-flex;

    h6 {
      width: fit-content;
      margin-left: 15%;
    }
  }

  .filler {
    flex-grow: 1;
  }

  .signout-button {
    margin-right: 40px;
    background-color: var(--background-color-light);
    height: 25px;
    margin-top: 20px;
  }

</style>
