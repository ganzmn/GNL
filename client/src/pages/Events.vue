<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="events"
        :data="eventList"
        :columns="eventCols"
        :filter="eventFilter"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="eventFilter"
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
  name: 'events',
  data () {
    return {
      eventFilter: '',

      event: [{
        name: null,
        type: null
      }],

      eventList: [{
        id: 1,
        name: 'Beer and Boots XI',
        description: 'BBB Annual Tournament 2018'
      },
      {
        id: 2,
        name: 'Beer and Boots XII',
        description: 'BBB Annual Tourname 2019'
      }],

      eventCols: [{
        name: 'name',
        required: true,
        label: 'Event',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'description',
        required: true,
        label: '',
        align: 'left',
        field: row => row.description,
        format: val => `${val}`,
        sortable: true
      }]
    }
  },
  methods: {

  }
}
</script>
