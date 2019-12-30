<template>
  <q-page>
    <div class="q-pa-md">

      <!-- #################################################### Player section ####################################################-->
      <q-toolbar class="bg-accent rounded-borders">
        <q-icon
          flat
          size='large'
          color='white'
          name="person"
        />
        <q-toolbar-title class="text-white">Player Management</q-toolbar-title>
      </q-toolbar>
      <!-- add player Popup-->
      <q-dialog
      v-model="addNewPlayer"
      >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Add Player</div>
        </q-card-section>

        <q-card-section>
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
          v-model="player.team"
          :options="teamOptions"
          label="Primary Team"
        ></q-select>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn class="q-pa-sm" flat @click="submitNewPlayer" v-close-popup>Submit New Player</q-btn>
          <q-btn class="q-pa-sm" flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

      <!-- player list with actions -->
      <q-table
        title="Players"
        :data="playerList"
        :columns="playerCols"
        :filter="playerFilter"
        row-key="name"
        class="q-ma-md"
      >
       <q-td slot="body-cell-Actions" slot-scope="props" key="Actions" :props="props" style="text-align:center;" >
                <q-btn-group>
                    <q-btn v-for="action in Actions"
                            :key="action.name"
                            outline
                            :icon="action.icon"
                            @click="action.onClick(props.row)">
                        <q-tooltip v-if="action.tooltip">{{ action.tooltip }}</q-tooltip>
                        <q-popup-proxy v-if="action.proxy">
                        <q-banner>
                          <template v-slot:avatar>
                            <q-icon name="mail" color="primary" />
                          </template>
                          Send sign-up invite?
                          <q-btn color="positive" class="q-pa-sm q-ma-sm">Send</q-btn>
                        </q-banner>
                      </q-popup-proxy>
                    </q-btn>
                </q-btn-group>
        </q-td>
        <template v-slot:top-right>
          <q-input
            outlined
            dense
            debounce="300"
            v-model="playerFilter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
          <q-btn class="q-ma-md" outline label="Add Player" @click="addNewPlayer = true" />
        </template>
      </q-table>

      <!-- #################################################### Team section ####################################################-->
      <q-toolbar class="bg-accent rounded-borders">
        <q-icon
          flat
          size='large'
          color='white'
          name="map"
        />
        <q-toolbar-title class="text-white">Team Management</q-toolbar-title>
      </q-toolbar>

      <!-- add team popup -->

      <q-dialog
      v-model="addNewTeam"
      >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Add Team</div>
        </q-card-section>

        <q-card-section>
          <q-input
          v-model="team.name"
          label="Team Name"
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn class="q-pa-sm" flat  @click="submitNewTeam" v-close-popup>Submit New Team</q-btn>
          <q-btn class="q-pa-sm" flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

      <!-- team list with actions -->
      <q-table
        title="Teams"
        :data="teamList"
        :columns="teamCols"
        :filter="teamFilter"
        row-key="name"
        class="q-ma-md"
      >
      <q-td slot="body-cell-teamActions" slot-scope="props" key="teamActions" :props="props" style="text-align:center;" >
                <q-btn-group>
                    <q-btn v-for="action in teamActions"
                            :key="action.name"
                            outline
                            :icon="action.icon"
                            @click="action.onClick(props.row)">
                        <q-tooltip v-if="action.tooltip">{{ action.tooltip }}</q-tooltip>
                    </q-btn>
                </q-btn-group>
        </q-td>
        <template v-slot:top-right>
          <q-input
            outlined
            dense
            debounce="300"
            v-model="teamFilter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
          <q-btn class="q-ma-md" label="Add Team" outline @click="addNewTeam = true" />
        </template>
      </q-table>

      <!-- #################################################### Event section ####################################################-->
      <q-toolbar class="bg-accent rounded-borders">
        <q-icon
          flat
          size='large'
          color='white'
          name="map"
        />
        <q-toolbar-title class="text-white">Event Management</q-toolbar-title>
      </q-toolbar>
      <!-- add event popup -->

      <q-dialog
      v-model="addNewEvent"
      >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Add Event</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="event.name"
            label="Event Name"
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn class="q-pa-sm" flat  @click="submitNewEvent" v-close-popup>Submit New Event</q-btn>
          <q-btn class="q-pa-sm" flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

      <!-- event list with actions -->
      <q-table
        title="Events"
        :data="eventList"
        :columns="eventCols"
        :filter="eventFilter"
        row-key="name"
        class="q-ma-md"
      >
      <q-td slot="body-cell-eventActions" slot-scope="props" key="eventActions" :props="props" style="text-align:center;" >
                <q-btn-group>
                    <q-btn v-for="action in eventActions"
                            :key="action.name"
                            outline
                            :icon="action.icon"
                            @click="action.onClick(props.row)">
                        <q-tooltip v-if="action.tooltip">{{ action.tooltip }}</q-tooltip>
                    </q-btn>
                </q-btn-group>
        </q-td>
        <template v-slot:top-right>
          <q-input
            outlined
            dense
            debounce="300"
            v-model="eventFilter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
          <q-btn class="q-ma-md" label="Add Event" outline @click="addNewEvent = true" />
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
        email: null,
        team: null }],

      addNewPlayer: false,
      addNewTeam: false,
      addNewEvent: false,

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
        email: 'jake.ganser@gmail.com',
        team: 'Boots & Hoes'
      },
      {
        id: 2,
        fName: 'Joe',
        lName: 'Ganser',
        email: 'jganser@notGmail.com',
        team: 'Boots & Hoes'
      }],

      teamList: [{
        id: 1,
        name: 'Boots & Hoes'
      },
      {
        id: 2,
        name: 'Silver Bullets' }
      ],

      teamOptions: [{label: 'Boots & Hoes', value: '1'}, {label: 'Silver Bullets', value: '2'}],

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
        name: 'team',
        required: true,
        label: 'Primary Team',
        align: 'left',
        field: row =>  (typeof row.team) == "string" ? row.team : row.team.label,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'Actions',
        label: 'Actions',
        field: 'Actions',
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
      },
      {
        name: 'teamActions',
        label: 'Actions',
        field: 'teamActions',
        align: 'center'
      }],

      eventCols: [{
        name: 'name',
        required: true,
        label: 'Event Name',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'eventActions',
        label: 'Actions',
        field: 'eventActions',
        align: 'center'
      }],

      Actions:[
        {
            name: "Edit",
            include: true,
            tooltip: "Edit",
            showMenu: true,
            icon: "edit",
            onClick: function(row) {
              // me.goToProjectUtilityAllowances(row);
            }
        },
        {
            name: "Invite",
            include: true,
            tooltip: "Send Invite",
            label: "Send Invite",
            showMenu: true,
            icon: "mail",
            proxy: true,
            onClick: function(row) {
            // me.goToProjectUtilityAllowances(row);
          }
        }
      ],
      teamActions:[
        {
            name: "Edit",
            include: true,
            tooltip: "Edit",
            showMenu: true,
            icon: "edit",
            onClick: function(row) {
              // me.goToProjectUtilityAllowances(row);
            }
        },
        {
            name: "Delete",
            include: true,
            tooltip: "Delete",
            showMenu: true,
            icon: "delete",
            onClick: function(row) {
            // me.goToProjectUtilityAllowances(row);
          }
        }
      ],
      eventActions:[
        {
            name: "Edit",
            include: true,
            tooltip: "Edit",
            showMenu: true,
            icon: "edit",
            onClick: function(row) {
              // me.goToProjectUtilityAllowances(row);
            }
        },
        {
            name: "Delete",
            include: true,
            tooltip: "Delete",
            showMenu: true,
            icon: "delete",
            onClick: function(row) {
            // me.goToProjectUtilityAllowances(row);
          }
        }
      ],
    }
  },
  methods: {
    submitNewPlayer () {
      let me = this;
      console.log(this.player)
      data.Auth.AddUser(this.player)
        .then(function(response) {
          console.log("FE:", response)

          //refresh playerlist instead of playerlist push
        })
        .catch(function (ex) {
            console.log("error:", ex)
        });
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
