<script>

export default {
  setup(context, props) {
    console.log("User > script setup ...");
  },

  data() {
    return {
      user: {
        id: "6561ffbd-dd8c-4a9c-9c26-51809dfe29ea",
        phone: 3366993366,
        email: "one@one.com",
        createdOn: "2021-09-12T23:41:49.391",
        updatedOn: "2021-09-12T23:41:49.391",
      },
    };
  },

  created() {
    console.log("created() ...");
  },

  methods: {},

  components: {
    TopNav
  }
};

import TopNav from "@/components/TopNav.vue";

</script>

<template>
  <TopNav />

  User!!
  <div class="box has-background-info has-text-white m-5">
    <div class="field">Id: {{ user.id }}</div>
    <div class="field">Phone: {{ user.phone }}</div>
    <div class="field">Email: {{ user.email }}</div>
    <div class="field">Created On {{ user.createdOn }}</div>
    <div class="field">Updated On {{ user.updatedOn }}</div>
  </div>
</template>
