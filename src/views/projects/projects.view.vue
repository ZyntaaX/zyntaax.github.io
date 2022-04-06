<template>
  <div>
    <Header>
      <h2>My projects</h2>
    </Header>

    <div
      v-if="!hasLoaded"
      class="spinner"
    />

    <div
      v-for="proj in projects"
      :key="proj.title"
      class="item"
      @click="itemClicked(proj.id)"
    >
      <h4> {{ proj.title }} </h4>
      <img
        :src="proj.snapshot_image_path"
        alt="image"
        class="snapshot"
      >
    </div>
  </div>
</template>

<script>

import * as db from '@/firebase';
import Header from '@/components/headers/header.vue';

// eslint-disable-next-line import/no-cycle
import { ROUTE_PROJECTS } from '@/router/index';

export default {
  name: 'ProjectsView',
  components: {
    Header,
  },
  data() {
    return {
      projects: [],
      hasLoaded: false,
    };
  },
  async created() {
    const docs = db.collection(db.db, 'projects');
    const snapshot = await db.getDocs(docs);

    this.projects = snapshot.docs.map((doc) => doc.data());

    this.hasLoaded = true;
  },
  methods: {
    itemClicked(id) {
      this.$router.push(`${ROUTE_PROJECTS}/${id}`);
    },
  },
};

</script>

<style lang="scss" scoped>

  h2 {
    margin-bottom: 50px;
  }

  .item {
    background-color: var(--background-color-dark);
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    transition: all ease 0.2s;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  .snapshot {
    // width: 50px;
    height: 150px;
  }

</style>
