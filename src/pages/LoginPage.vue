<template>
  <div class="q-pa-md tw:justify-center tw:m-auto tw:mt-30 bg-[C:\Users\Tojo\Downloads\low-poly-abstract-design]" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="title">Login </div>
      <q-input

        v-model="name"
        label="Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your username']"
      />

      <q-input

        type="text"
        v-model="password"
        label="Password"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your Password',
          val => val.length >= 6|| 'insufficient password'
        ]"
      />

      <div class="tw:flex column tw:">
        <q-btn label="Login" class="tw:" type="submit" color="warning"/>
        <a href="" class="tw:to-blue-700">Forgot password ?</a>

      </div>
    </q-form>

  </div>
</template>
<script lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const password = ref(null)
    const accept = ref(false)

    return {
      name,
      password,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        password.value = null
        accept.value = false
      }
    }
  }
}
</script>

<style lang="scss">
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size:20px;
  display: flex;
  justify-content: center;
}
</style>
