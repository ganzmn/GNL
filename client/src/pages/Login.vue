<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md">
      <img
        src="..\assets\iceHockey.jpg"
        style="max-width: 300px;"
        contain
      />
      <div class="layout-view layout-padding">
        <q-field
          icon="mail"
          error-label="A valid email address is needed"
        >
          <q-input
            v-model="credentials.email"
            placeholder="Your email address"
            class="full-width"
            ref="email"
          />
        </q-field>
        <q-field icon="vpn_key">
          <q-input
            v-model="credentials.pw"
            type="password"
            placeholder="Your password"
            class="full-width"
          />
        </q-field>

        <div class="flex flex-center">
          <span class="q-pa-sm">
            <q-btn
              color="primary"
              @click="submit()"
            >Login</q-btn>
          </span>
          <span class="q-pa-sm">
            <q-btn
              color="secondary"
              v-go-back=" '/' "
            >Cancel</q-btn>
          </span>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import * as data from '../data'

export default {
  data () {
    return {
      credentials: {
        email: '',
        pw: ''
      }
    }
  },

  mounted () {
    // on next Vue tick, to ensure
    // our Vue reference exists
    this.$nextTick(() => {
      // calling "next()" method:
      this.$refs.email.focus()
    })
  },

  methods: {
    submit () {
      data.Auth.Login(this.credentials)
    }
  }
}
</script>
