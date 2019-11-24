<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md">
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
            v-model="credentials.password"
            type="password"
            placeholder="Your password"
            class="full-width"
          />
        </q-field>

        <div class="q-pa-md">
          <q-btn
            color="primary"
            @click="submit()"
          >Login</q-btn>
          <q-btn
            color="secondary"
            v-go-back=" '/' "
          >Cancel</q-btn>
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
        password: ''
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
      data.Auth.login(this.credentials, 'profile')
    }
  }
}
</script>
