import axios from 'axios'

class Admin {
  async AddPlayer (player) {
    return axios.post('/addPlayer', {
      fName: player.fName,
      nName: player.nName,
      lName: player.lName
    })
  }
}

export default new Admin()
