<template>
  <div>
    <Header>
      <h2>Login</h2>
    </Header>
    <form @keyup.enter="login">
      <div
        v-if="isLoading"
        class="spinner"
      />
      <div v-else>
        <div class="container">
          <input
            v-model="email"
            placeholder="Email"
          >
        </div>
        <div class="container">
          <vue-base-input
            input-type="password"
            v-model="password"
            placeholder="Password"
          />
        </div>
        <button
          class="btn"
          @click="login"
        >
          Login
        </button>
        <p
          v-if="error"
          style="color: red"
        >
          {{ error }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>

import Header from '@/components/headers/header.vue';
import vueBaseInput from 'vue-base-input';

import User from '@/utilities/authentication.manager';

export default {
  components: {
    Header,
    vueBaseInput,
  },
  data() {
    return {
      User,
      email: '',
      password: '',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      this.isLoading = true;
      await User.login(this.email, this.password)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          this.error = error.message;
        });
      this.isLoading = false;
    },
  },
};

</script>

<style lang="scss" scoped>

  .btn {
    margin-top: 20px;
  }

</style>
