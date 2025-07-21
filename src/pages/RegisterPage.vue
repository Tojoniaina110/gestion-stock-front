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
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="tw:text-2xl tw:font-bold tw:text-center">Register</div>

          <div class="tw:grid tw:grid-cols-2 tw:gap-4">
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
              :rules="[(val) => (val !== null && val !== '') || 'Please type your Password']"
            />

            <q-input
              v-model="firstName"
              label="FirstName"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Please enter your firstName']"
            />

            <q-input
              type="text"
              v-model="lastName"
              label="LastName"
              lazy-rules
              :rules="[(val) => (val !== null && val !== '') || 'Please type your Password']"
            />

            <q-input v-model="contact" label="Contact" lazy-rules />

            <q-input type="text" v-model="email" label="Email" lazy-rules />
          </div>

          <div class="tw:flex tw:gap-4 column tw:text-center">
            <q-btn :loading="loading" label="Register" no-caps type="submit" color="warning" />
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
import { type RegisterInput, USER_ROLE, USER_STATUS } from 'src/common/types';

const $q = useQuasar();

const userName = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const contact = ref('');

const loading = ref(false);

function onSubmit() {
  const input: RegisterInput = {
    userName: userName.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    contact: contact.value,
    email: email.value,
    status: USER_STATUS.ENABLE,
    role: USER_ROLE.SUPER_ADMIN,
    id: undefined,
  };

  loading.value = true;

  api
    .post('/api/auth/register', input)
    .then(function (response) {
      console.log({ response });

      loading.value = false;

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted',
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
