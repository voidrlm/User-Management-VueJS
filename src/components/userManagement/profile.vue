<template>
  <v-dialog
    :value="showProfile"
    persistent
    max-width="400"
    content-class="rounded-xl"
    :overlay-opacity="0.8"
  >
  </v-dialog>
</template>

<script>
export default {
  name: "profile-component",
  props: { showProfile: Boolean },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
