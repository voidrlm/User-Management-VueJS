<template>
  <v-card dark>
    <v-card-title class="justify-center py-5"
      >Sign up with your email address</v-card-title
    >
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          prepend-inner-icon="mdi-mail"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          solo-inverted
          rounded
          color="black"
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="mdi-account"
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Profile Name"
          required
          solo-inverted
          rounded
          color="black"
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="mdi-key"
          v-model="password"
          :rules="passwordRules"
          label="Create a password"
          required
          solo-inverted
          rounded
          color="black"
        ></v-text-field>
      </v-form>
      <v-card-actions class="justify-center pb-5 mt-n2">
        <v-btn
          rounded
          color="accent"
          @click="$emit('closeForm')"
          dark
          elevation="0"
          class="mr-5 px-4"
          :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        >
          Cancel
        </v-btn>
        <v-btn
          rounded
          color="accent"
          @click="createUser"
          dark
          elevation="0 px-4"
          :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        >
          Sign up
        </v-btn>
      </v-card-actions></v-card-text
    >
  </v-card>
</template>
<script>
export default {
  name: "sign-up-component",
  props: {
    // showSignUpForm: { type: Boolean, default: false },
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (value) => !!value || "Password is required.",
      (value) => (value && value.length >= 8) || "Minimum 6 characters",
    ],
  }),
  computed: {},
  methods: {
    performAction(action) {
      console.log(action);
    },
    createUser() {
      this.$refs.form.validate();
    },
  },
};
</script>
