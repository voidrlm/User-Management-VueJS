<template>
  <v-container fluid fill-height style="background: black">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="rounded-xl" dark>
          <v-card-title class="justify-center pa-5">Login</v-card-title>

          <v-form class="px-8 mb-n2">
            <v-text-field
              color="black"
              prepend-inner-icon="mdi-account"
              label="UserName/Mail"
              type="text"
              solo-inverted
              rounded
            ></v-text-field>
            <v-text-field
              color="black"
              prepend-inner-icon="mdi-lock"
              label="Password"
              type="password"
              solo-inverted
              rounded
            ></v-text-field>
          </v-form>

          <v-card-actions class="justify-center nt-n5 pb-5">
            <v-btn
              rounded
              color="accent"
              @click.stop="performAction('signup')"
              dark
              elevation="0"
              class="mr-5 px-4"
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >
              Sign Up
            </v-btn>
            <v-btn
              rounded
              color="accent"
              @click.stop="performAction('login')"
              dark
              elevation="0 px-4"
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "user-auth-component",
  data: () => ({}),
  computed: {},
  methods: {
    performAction(action) {
      console.log(action);
    },
  },
};
</script>
