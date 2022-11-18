<template>
  <v-dialog
    :value="showProfile"
    persistent
    max-width="400"
    content-class="rounded-xl"
    :overlay-opacity="0.8"
  >
    <v-card class="pa-5 text-center rounded-xl" max-width="400">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-avatar size="200">
            <v-img
              :src="
                $store.getters.currentUser.avatar
                  ? 'https://avatars.githubusercontent.com/u/117543015?s=400&u=f884d6fe7910410f3e86aa0ce922777dbc2d51fc&v=4'
                  : {
                      src: require('../../assets/defaultAvatar.png'),
                      text: 'Default Avatar',
                      extra: 'Avatar',
                    }
              "
            />
            <v-fade-transition>
              <v-overlay v-if="hover" absolute style="cursor: pointer">
                <v-icon size="50">mdi-pencil</v-icon>
              </v-overlay>
            </v-fade-transition>
          </v-avatar>
        </template>
      </v-hover>

      <v-list-item color="#0000" class="">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ $store.getters.currentUser.name
            }}<v-btn icon plain class="ml-1">
              <v-icon> mdi-pencil </v-icon>
            </v-btn></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-btn
        rounded
        color="accent"
        @click.stop="$emit('closeProfileDialog')"
        dark
        elevation="0"
        class="mr-5 px-4"
        :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
      >
        Close
      </v-btn>
    </v-card>
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
