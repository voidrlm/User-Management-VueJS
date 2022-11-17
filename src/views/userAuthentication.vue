<template>
  <v-container fluid fill-height style="background: black">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="rounded-xl" dark>
          <v-card-title class="justify-center pa-5">Login</v-card-title>

          <v-form class="px-8 mb-n2" ref="form" v-model="valid" lazy-validation>
            <v-text-field
              color="black"
              prepend-inner-icon="mdi-account"
              label="Username"
              type="text"
              solo-inverted
              v-model="name"
              :counter="10"
              :rules="nameRules"
              rounded
            ></v-text-field>
            <v-text-field
              color="black"
              prepend-inner-icon="mdi-lock"
              label="Password"
              type="password"
              solo-inverted
              v-model="password"
              :rules="passwordRules"
              rounded
            ></v-text-field>
          </v-form>

          <v-card-actions class="justify-center pb-5">
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
    <v-dialog v-model="showSignUpForm" fullscreen
      ><signUpForm @closeForm="showSignUpForm = false"
    /></v-dialog>
  </v-container>
</template>
<script>
import signUpForm from "../components/userManagement/signUpForm.vue";
export default {
  name: "user-auth-component",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    password: "",
    passwordRules: [
      (value) => !!value || "Password is required.",
      (value) => (value && value.length >= 8) || "Minimum 6 characters",
    ],
    showSignUpForm: false,
  }),
  components: {
    signUpForm,
  },
  computed: {},
  methods: {
    performAction(action) {
      if (this.$refs.form.validate()) {
        console.log(action);
        if (action === "signup") {
          this.showSignUpForm = true;
        }
      }
    },
  },
};
</script>
