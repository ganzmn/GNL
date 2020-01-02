import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/graphql',
  timeout: 1000
})

class Auth {

    async AddPlayer (player) {
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
        return apiClient.post('/addPlayer', {
            query: ADD_PLAYER,
            variables: {
            fName: player.fName,
            lName: player.lName,
            teamId: player.team.value,
            userId: player.userId
            }
        })
            .catch(function (error) {
            console.log(error);
            });
    }

    async GetAllPlayers () {
        var result = await apiClient({
            method: "POST",
            data: {
                query: `
                    {
                        queryAllPlayers {
                            fName,
                            lName,
                            teamId,
                            userId
                        }
                    }
                `
            }
        });
        return result;
    } catch (error) {
        console.error(error);
    }

}

export default new Auth()
