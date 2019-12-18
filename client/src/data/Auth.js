import axios from 'axios'

class Auth {

  async AddUser (user) {
    const ADD_USER = `
      mutation addUser($email:String!, $pw:String!, $roleId:String!) {
        addUser(email:$email, pw:$pw, roleId:$roleId) { 
          email
          pw
          roleId         
        }
      }
      `

    var instance = axios.create({
      baseURL: 'http://localhost:3000/graphql',
      timeout: 1000,
    })
    instance.post('/addUser', {
      query: ADD_USER,
      variables: {
        email: user.email,
        pw: user.pw,
        roleId: user.roleId
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  async Login (user) {
    return axios.post('/login', {
      email: user.email,
      pw: player.pw
    })
  }
}

export default new Auth()
