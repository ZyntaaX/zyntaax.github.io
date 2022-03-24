<template>
  <div class="container">
    <div class="text">
      <h6>
        © 2022 Rasmus Svanberg.
      </h6>
    </div>
  </div>
</template>

<script>

export default {

};

</script>

<style lang="scss" scoped>

  .container {
    width: 100%;
    height: 5vh;
    // height: 5rem;
    // padding: 0.7rem;
    // margin: 0;
    position: absolute;
    bottom: 0;
    margin-bottom: 0;

    background-color: var(--background-color-dark);
    z-index: 999;

    .text {
        margin-left: 20%;
        text-align: left;
    }

  }

</style>
