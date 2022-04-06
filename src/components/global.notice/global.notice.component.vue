<template>
  <div
    class="main-box"
    v-if="notifications.length > 0"
  >
    <div
      class="notice"
      v-for="(notice, index) in notifications"
      :key="index"
      :class="{'underline': notifications.length > 1 && index !== notifications.length - 1}"
    >
      <div
        class="header"
      >
        <font-awesome-icon
          class="icon"
          :icon="notice.isSevere ? 'triangle-exclamation' : 'circle-exclamation'"
          :class="{ 'severe': notice.isSevere }"
        />
        <h5> {{ notice.title || 'Notice' }} </h5>
      </div>
      <h6>
        <div v-html="notice.message" />
      </h6>
    </div>
  </div>
</template>

<script>

import * as db from '@/firebase';

export default {
  data() {
    return {
      notifications: [],
    };
  },
  async created() {
    try {
      const docs = db.collection(db.db, 'notifications');
      const snapshot = await db.getDocs(docs);

      this.notifications = snapshot.docs.map((doc) => doc.data());
      this.notifications = this.notifications.filter((notice) => notice.display === true);
      this.notifications = this.notifications.sort((a, b) => b.posted_timestamp - a.posted_timestamp);
    } catch (e) {
      console.log(e);
      this.notifications.push({
        message: 'There was a problem connecting to the database. Please try again later.',
        isSevere: true,
      });
    }
  },
};

</script>

<style lang="scss" scoped>

    .main-box {
        background-color: var(--background-color-dark);
        border-radius: 5px;
        padding: 5px;
    }

    .header {
        display: inline-flex;
        vertical-align: middle;

        .icon {
            position: absolute;
            left: 0;
            margin: 10px 0 0 25px;
            color: var(--warning);

            &.severe {
                color: var(--error);
            }
        }

        h5 {
            margin-top: 12px;
            text-decoration: underline;
        }
    }

    .notice {
        padding: 3px;

        &.underline {
            border-bottom: 1px solid gray;
        }

        h6 {
            margin-top: 1px;
        }
    }

</style>
