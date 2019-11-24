import axios from 'axios'

class Auth {
  async Login (player) {
    return axios.post('/addPlayer', {
      fName: player.fName,
      nName: player.nName,
      lName: player.lName
    })
  }
}

export default new Auth()
