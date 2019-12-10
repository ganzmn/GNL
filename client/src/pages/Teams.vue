<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Teams"
        :data="teamList"
        :columns="teamCols"
        :filter="teamFilter"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="teamFilter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import * as data from '../data'

export default {
  name: 'teams',
  data () {
    return {
      teamFilter: '',

      team: [{
        name: null
      }],

      teamList: [{
        id: 1,
        name: 'Boots & Hoes'
      },
      {
        id: 2,
        name: 'Silver Bullets'
      }],

      teamCols: [{
        name: 'name',
        required: true,
        label: 'Team Name',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      }]
    }
  },
  methods: {

  }
}
</script>
