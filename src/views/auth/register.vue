<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-5">
        Register
      </h2>
      <AlertInfo
          message="If you have account"
          navigate_text="Back to login"
          @navigate="goToLogin"
      />
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md" @submit.prevent="submit">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
            <div class="mt-1">
              <input id="email" v-model="form.username" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>


          <div>
            <button type="submit"
                    class="w-full flex justify-center py-2  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Continue
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AlertInfo from '../../components/alerts/alert_info.vue';
export default {
  name: "Register",
  components: {
    AlertInfo
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: true
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
        await this.LogIn(User);
        await this.$router.push("/home");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
    async goToLogin() {
      await this.$router.push("/login");
    },
  },
}
</script>
