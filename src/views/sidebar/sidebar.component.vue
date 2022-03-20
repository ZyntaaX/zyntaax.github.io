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
      About me
    </h3>
    <p>25 year old male from Vaggeryd, Sweden.</p>
    <p>Working at ROL Ergo AB as a full stack software developer in Jönköping.</p>
    <div class="links">
      <!-- Resumé -->
      <div class="link-item">
        <font-awesome-icon
          class="link"
          :icon="['fas', 'file-lines']"
        />
        <a
          href="/docs/resume_2021.pdf"
          download
        >Resumé (outdated)</a>
      </div>
      <!-- GitHub -->
      <div class="link-item">
        <font-awesome-icon
          class="link"
          :icon="['fab', 'github']"
        />
        <a href="https://github.com/ZyntaaX">GitHub</a>
      </div>
      <!-- Email -->
      <div class="link-item">
        <font-awesome-icon
          class="link"
          :icon="['fas', 'at']"
        />
        <a href="mailto: rasmus.svahnberg97@gmail.com">Email</a>
      </div>
      <!-- LinkedIn -->
      <div class="link-item">
        <font-awesome-icon
          class="link"
          :icon="['fab', 'linkedin-in']"
        />
        <a href="https://www.linkedin.com/in/rasmus-svanberg-302236198/">LinkedIn</a>
      </div>
    </div>

    <!-- <a href="/images/myw3schoolsimage.jpg" download> -->
  </div>
</template>

<script>

export default {

};

</script>

<style lang="scss" scoped>

  .links {
    display: block;

    .link-item {
      margin-top: 10px;
      width: 100%;
      display: inline-flex;
      color: var(--text-color-secondary);

      a {
        text-decoration: none;
        margin-left: 10px;
        color: var(--text-color-secondary);

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }

  .main-container {
    text-align: left;

    p, h1, h2, h3, h4, h5, h6 {
      color: var(--text-color-secondary);
    }

    .header {
      text-align: center;
    }
  }

  .img-wrapper {
    margin: 0 auto;
    border: 1px solid var(--text-color-secondary);
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
