<template>
    <q-page>
    <div class="q-pa-md">
        <q-table
        title="Players"
        :data="playerList"
        :columns="playerCols"
        :filter="playerFilter"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="playerFilter"
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
  name: 'Players',
  data () {
    return {
      playerFilter: '',

      player: [{
        fName: null,
        lName: null,
        email: null }],

      playerList: [{
        id: 1,
        fName: 'Jake',
        lName: 'Ganser',
        email: 'jake.ganser@gmail.com'
      },
      {
        id: 2,
        fName: 'Joe',
        lName: 'Ganser',
        email: 'jganser@notGmail.com'
      }],

      playerCols: [{
        name: 'fName',
        required: true,
        label: 'First Name',
        align: 'left',
        field: row => row.fName,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'lName',
        required: true,
        label: 'Last Name',
        align: 'left',
        field: row => row.lName,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'email',
        required: true,
        label: 'Email',
        align: 'left',
        field: row => row.email,
        format: val => `${val}`,
        sortable: true
      }]
    }
  },
  methods: {

  }
}
</script>