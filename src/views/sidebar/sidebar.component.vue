<template>
  <div class="main-container">
    <div class="sidebar-container">
      <div class="img-wrapper">
        <img
          class="portrait"
          alt="me"
          src="/images/portrait.jpg"
        >
      </div>
    </div>
    <h3 class="header">
      Connect with me!
    </h3>
    <font-awesome-icon icon="brands fa-github" />
    <h4>github</h4>
  </div>
</template>

<script>

export default {

};

</script>

<style lang="scss" scoped>

    .main-container {
      text-align: left;

      .header {
        text-align: center;
      }
    }

    .img-wrapper {
        margin: 0 auto;
        border: 1px solid gray;
        border-radius: 50%;
        padding: 5px;
        width: 120px;
        height: 120px;

        .portrait {
            border-radius: 50%;
            width: 120px;
            height: 120px;
        }
    }

</style>
