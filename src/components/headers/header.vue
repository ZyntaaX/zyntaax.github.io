<template>
  <div class="container">
    <font-awesome-icon
      icon="chevron-left"
      class="back-button"
      v-if="canRouteBack"
      @click="$router.go(-1)"
    />
    <slot class="slot" />
  </div>
</template>

<script>

export default {
  name: 'HeaderComponent',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  props: {
    canRouteBack: {
      type: Boolean,
      default: false,
    },
  },
};

</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    justify-content: center;

    .back-button {
      position: absolute;
      color: white;
      left: 0;
      vertical-align: baseline;
      height: 26px;
      margin: 20px 0 0 20px;
      cursor: pointer;
    }
  }

</style>
