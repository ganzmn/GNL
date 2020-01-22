import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/graphql',
  timeout: 1000
})

class Auth {

  async AddUser (user) {
    const ADD_USER = `
      mutation addUser($email:String!, $pw:String!, $roleId:String!) {
        addUser(email:$email, pw:$pw, roleId:$roleId) { 
          id
          email
          pw
          roleId         
        }
      }
      `
      apiClient.post('/addUser', {
      query: ADD_USER,
      variables: {
        email: user.email,
        pw: "pw",
        roleId: "1"
      }
    })
    .then(function (response) {
      console.log(response);
      const ADD_PLAYER = `mutation addPlayer($fName:String!, $lName:String!, $teamId:String!, $userId:String!) {
        addPlayer(fName:$fName, lName:$lName, teamId:$teamId, userId:$userId) { 
          id
          fName
          lName
          teamId
          userId         
        }
      }
      `
      console.log(user.team)
      return apiClient.post('/addPlayer', {
        query: ADD_PLAYER,
        variables: {
          fName: user.fName,
          lName: user.lName,
          teamId: user.team.value,
          userId: response.data.data.addUser.id
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  async Login (user) {
    if(!this.UserExists(user.email))
      return false;

    return apiClient({
      method: "POST",
      url: "/loginUser",
      data: {
        query: `
          {
            loginUser ($email:String!, $pw:String!) {
              loginUser (email:$email, pw:$pw){
                id
              }
            }
          }
        `,
        variables: {
          email: user.email,
          pw: user.pw
        }
      }
    })
  }

  async UserExists (email) {
    console.log(email)
    var result = await apiClient({
        method: "POST",
        url: "/queryUserByUsername",
        data: {
            query: `
                {
                    queryUserByUsername (email:$email){
                        email,
                        id
                    }                 
                }               
            `,
            variables: {
              email: email
            }
        }
    });
    if(result == null || result.email == null)
      return false;
    else
      return true;

  } catch (error) {
      console.error(error);
  }

}

export default new Auth()
