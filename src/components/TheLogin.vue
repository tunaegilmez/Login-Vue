<template>
  <div class="flex justify-center items-center">
    <div class="flex flex-col justify-between">
      <div></div>

      <form class="flex flex-col gap-12 my-24">
        <label for="login" class="text-red-500 text-xl">Login</label>
        <div>
          <label class="label">
            <span class="label-text text-red-600">required</span>
          </label>
          <input
            v-model="username"
            type="text"
            placeholder="username"
            class="input w-full max-w-xs border border-red-500 text-white"
          />
        </div>
        <div>
          <label class="label">
            <span class="label-text text-red-600">required</span>
          </label>
          <input
            v-model="password"
            type="text"
            placeholder="password"
            class="input w-full max-w-xs border border-red-500 text-white"
          />
        </div>
        <div>
          <router-link :to="isAuth ? '/greeting' : ''">
            <button
              @click="handleLogin"
              class="px-4 py-2 rounded-md text-white border border-white"
            >
              Login
            </button>
          </router-link>
        </div>
      </form>
      <Toast v-if="loginToast">No user available</Toast>
      <Toast v-if="toast">Required values: username, password</Toast>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import Toast from "@/shared/TheToast.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
      encodedPass: "",
      toast: false,
      loginToast: false,
    };
  },
  components: {
    Toast,
  },
  computed: {
    ...mapState("auth", ["isAuth"]),
    ...mapGetters("auth", ["isAuthUser"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),

    handleLogin() {
      if (this.username === "" || this.password === "") {
        this.toast = true;
        setTimeout(() => {
          this.toast = false;
        }, 2500);
      }
      // else if (this.isAuthUser) {
      //   console.log("Burdayım--", !this.isAuthUser);
      //   this.loginToast = true;
      //   setTimeout(() => {
      //     this.loginToast = false;
      //   }, 2500);
      // }
      else {
        console.log("Burda Değilim");
        this.encodedPass = btoa(this.password);

        this.login({
          username: this.username,
          password: this.encodedPass,
        });
      }
    },
  },
  mounted() {
    if (this.isAuth) {
      this.$router.push("/greeting");
    }
  },
};
</script>
