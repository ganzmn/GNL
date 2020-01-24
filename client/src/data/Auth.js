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
    await this.UserExists(user.email).then(result => {
      if(result.data.data.queryUserByUsername.length <= 0)
        return false;
      else{
          console.log(result)
          apiClient({
          method: "POST",
          url: "/loginUser",
          data: {
            query: `
              {
                loginUser (email:`+'"'+user.email+'"'+`, pw:`+'"'+user.pw+'"'+`){
                  id
                }              
              }
            `,
            variables: {
              email: user.email,
              pw: user.pw
            }
          }
        }).then(result => {return result})
      }
    })   
  }

  async UserExists (email) {
    console.log(email)
    return await apiClient({
        method: "POST",
        url: "/queryUserByUsername",
        data: {
            query: `
                {
                    queryUserByUsername (email:`+'"'+email+'"'+`){
                      email
                      id
                  
                  }                                  
                
                }               
            `,
            variables: {
              email: email
            }
        }
    })  
  }
}

export default new Auth()
