<template>
  <div
    class="tw:h-full tw:w-full tw:flex tw:justify-center items-center tw:bg-[url(src/assets/images/bg-login.webp)] tw:bg-cover"
  >
    <div
      class="tw:flex tw:flex-col tw:w-[450px] tw:h-[600px] tw:bg-cover tw:shadow-xl tw:rounded-lg tw:contain-content"
    >
      <div
        class="tw:h-[150px] tw:flex tw:flex-col tw:justify-center tw:items-center tw:px-8 tw:bg-[url(src/assets/images/bg-login.webp)] tw:bg-cover"
      >
        <div class="tw:font-bold tw:text-lg">Hello & Welcome</div>
        <div class="tw:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="form tw:flex-1 tw:p-8 tw:bg-white">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="tw:text-2xl tw:font-bold tw:text-center">Login</div>
          <q-input
            v-model="userName"
            label="Username"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Please enter your username']"
          />

          <q-input
            type="text"
            v-model="password"
            label="Password"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your Password',
              // (val) => val.length >= 6 || 'insufficient password',
            ]"
          />

          <div class="tw:flex tw:gap-4 column tw:text-center">
            <q-btn :loading="loading" label="Login" class="tw:" type="submit" color="warning" />

            <q-btn flat to="/register" class="tw:to-blue-700">Create account</q-btn>

            <a href="" class="tw:to-blue-700">Forgot password ?</a>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { api } from 'boot/axios';
import { type LoginInput } from 'src/common/types';
import { useRouter } from 'vue-router';

const $q = useQuasar();

const $router = useRouter();

const userName = ref('');
const password = ref('');

const loading = ref(false);

function onSubmit() {
  const input: LoginInput = {
    userName: userName.value,
    password: password.value,
  };

  loading.value = true;

  api
    .post('/api/auth/login', input)
    .then(function (response) {
      console.log({ response });

      loading.value = false;

      if (response.data.user) {
        $router.push('/dashboard');
      }

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'You are logged in',
      });
    })
    .catch(function (error) {
      console.log({ error });

      loading.value = false;
    });
}

function onReset() {
  userName.value = '';
  password.value = '';
}
</script>

<style lang="scss" scoped>
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
</style>
