<template>
  <div v-if="!showFullSizeImage">
    <Header :can-route-back="true">
      <h2>
        {{ project.title }}
      </h2>
    </Header>
    <div v-html="project.description" />
    <!-- <p> {{ project.description }} </p> -->
    <!-- <img :src="project.snapshot_image_path" alt="image1" class="image-container"> -->
    <font-awesome-icon
      icon="xmark"
      class="close-button"
      v-if="imageToShow !== ''"
      @click="cancelShowImage"
    />
    <img
      v-if="imageToShow !== ''"
      class="image-container fullsize"
      :src="imageToShow"
      alt=""
      @click="cancelShowImage"
    >
    <img
      v-for="path in project.image_paths"
      :key="path"
      class="image-container"
      :src="path"
      alt="Image"
      @click="setImageToShow(path)"
    >
  </div>
</template>

<script>

import * as db from '@/firebase';
import Header from '@/components/headers/header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      project: {},
      imageToShow: '',
    };
  },
  async created() {
    const projects = db.collection(db.db, 'projects');
    const snapshot = await db.getDocs(projects);

    const p = snapshot.docs.map((doc) => doc.data());
    // eslint-disable-next-line prefer-destructuring
    this.project = p.filter((proj) => proj.id.toString() === this.$route.params.projectId)[0];

    this.hasLoaded = true;
  },
  methods: {
    setImageToShow(path) {
      this.imageToShow = path;
    },
    cancelShowImage() {
      this.imageToShow = '';
    },
  },
};

</script>

<style lang="scss" scoped>

    .close-button {
        color: white;
        height: 30px;
        margin: 0 100% 0 -40px;
        cursor: pointer;
    }

    .image-container {
        background-color: rgba(1, 1, 1, 0.253);
        border-radius: 5px;
        margin: 5px;
        object-fit: scale-down;
        width: 250px;
        height: 150px;
        transition: all ease 0.3s;

        &:hover {
            cursor: pointer;
            background-color: rgba(1, 1, 1, 0.144);
        }

        &.fullsize {
            width: 100%;
            height: 500px;
        }
    }

    .fullscreen-image-container {
        background-color: rgba(1, 1, 1, 0.253);
        object-fit: scale-down;
        width: 100%;
        height: 500px;
    }

</style>
