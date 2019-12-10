<template>
  <q-page>
    <div class="q-pa-md">
      <q-toolbar>
        <q-icon
          flat
          size='large'
          color='primary'
          name="map"
        />
        <q-toolbar-title>Player Management</q-toolbar-title>
      </q-toolbar>
      <!-- add player -->
      <q-input
        v-model="player.fName"
        label="First Name"
      ></q-input>
      <q-input
        v-model="player.lName"
        label="Last Name"
      ></q-input>
      <q-input
        v-model="player.email"
        label="email"
        type="email"
      ></q-input>
      <q-select
        v-model="player.primaryTeam"
        :options="teamOptions"
        label="Primary Team"
      ></q-select>
      <q-btn @click="submitNewPlayer">Submit New Player</q-btn>

      <!-- player list with actions -->
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
      <q-toolbar>
        <q-icon
          flat
          size='large'
          color='primary'
          name="map"
        />
        <q-toolbar-title>Team Management</q-toolbar-title>
      </q-toolbar>

      <!-- add team -->
      <q-input
        v-model="team.name"
        label="Team Name"
      ></q-input>
      <q-btn @click="submitNewTeam">Submit New Team</q-btn>

      <!-- team list with actions -->
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

      <q-toolbar>
        <q-icon
          flat
          size='large'
          color='primary'
          name="map"
        />
        <q-toolbar-title>Event Management</q-toolbar-title>
      </q-toolbar>
      <!-- add event -->
      <q-input
        v-model="event.name"
        label="Event Name"
      ></q-input>
      <q-btn @click="submitNewEvent">Submit New Event</q-btn>
      <!-- event list with actions -->
      <q-table
        title="Events"
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
  name: 'Admin',
  data () {
    return {
      playerFilter: '',
      teamFilter: '',
      eventFilter: '',

      player: [{
        fName: null,
        lName: null,
        email: null }],

      team: [{
        name: null
      }],

      event: [{
        name: null
      }],

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

      teamList: [{
        id: 1,
        name: 'Boots and Hoes'
      },
      {
        id: 2,
        name: 'Silver Bullets' }
      ],

      teamOptions: ['Boots and Hoes', 'Silver Bullets'],

      eventList: [{
        name: 'Beers & Boots Bowl I'
      },
      { name: 'Beers & Boots Bowl II' }
      ],

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
      },
      {
        name: 'actions',
        required: true,
        label: 'Actions',
        align: 'center'
      }],

      teamCols: [{
        name: 'name',
        required: true,
        label: 'Team Name',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      }],

      eventCols: [{
        name: 'name',
        required: true,
        label: 'Event Name',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      }]
    }
  },
  methods: {
    submitNewPlayer () {
      // data.Admin.AddPlayer(this.player)
      this.playerList.push(this.player)
    },
    submitNewTeam () {
      // data.Admin.AddPlayer(this.player)
      this.teamList.push(this.team)
      this.teamOptions.push(this.team.name)
    },
    submitNewEvent () {
      // data.Admin.AddPlayer(this.player)
      this.eventList.push(this.event)
    }
  }
}
</script>
