<template>
  <v-card dark>
    <v-card-title class="justify-center">Sign Up</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation class="ma-5">
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
          prepend-inner-icon="mdi-key"
          v-model="password"
          :rules="passwordRules"
          label="Create a password"
          required
          solo-inverted
          rounded
          color="black"
        ></v-text-field>
        <v-btn color="accent" class="mr-4" @click="$emit('closeForm')">
          Close
        </v-btn>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form></v-card-text
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
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
