<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Great North Leagues</q-item-label>
        <navigationItem
          v-if="admin"
          to='/admin'
          label='Admin Controls'
          icon='person'
        />
        <navigationItem
          to='/players'
          label='Players'
          icon='school'
        />
        <navigationItem
          to='/teams'
          label='Teams'
          icon='flag'
        />
        <navigationItem
          to='/events'
          label='Events'
          icon='public'
        />
        <navigationItem
          to='/login'
          label='Login'
          icon='person'
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import navigationItem from './NavigationItem'

export default {
  name: 'MyLayout',
  components: {
    navigationItem
  },
  data () {
    return {
      leftDrawerOpen: false,
      admin: true
    }
  }
}
</script>
