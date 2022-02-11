<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-5">
        Welcome to Opal
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md" @submit.prevent="submit">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <AlertInfo v-if="!showError" message="Welcome back" />
        <AlertError v-if="showError" message="Error, invalid credentials" />
        <form class="space-y-6 mt-4" @submit.prevent="submit">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700"> Email address </label>
            <div class="mt-1">
              <input id="username"
                     name="username"
                     type="email"
                     autocomplete="username"
                     required
                     v-model="form.username"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input id="password"
                     name="password"
                     type="password"
                     autocomplete="password"
                     required
                     v-model="form.password"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>

          <div class="flex items-center justify-end">

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500"> Or </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-1">
            <div>
              <router-link
                  to="/register"
                  tag="button"
                  class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Register</span>
                Create a new Account
              </router-link>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AlertInfo from '../../components/alerts/alert_info.vue';
import AlertError from '../../components/alerts/alert_error.vue';
export default {
  name: "Login",
  components: {
    AlertInfo,
    AlertError
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      try {
        this.LogIn(this.form);
        await this.$router.push("/home");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
}
</script>
