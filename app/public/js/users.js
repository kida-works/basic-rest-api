// 即時関数でモジュール化

const usersModule =(()=>{
  const BASE_URL = "http:://localhost:3000/api/v1/users" 
  return {
    fetchAllUsers: async ()=> {
      const res = await fetch(BASE_URL)
      const users = await res.json()

      for (let i=0; i < users.length; i++){
        const user = users[i]
        const body = `<tr>
                        <tb>${user.id}</tb>
                        <tb>${user.name}</tb>
                        <tb>${user.profile}</tb>
                        <tb>${user.date_of_birth}</tb>
                        <tb>${user.created_at}</tb>
                        <tb>${user.updated_at}</tb>
                      </tr>`
        // IDの内側の末尾に値を追加していく
        document.getElementById('users-list').insertAdjacentHTML('bedoreend', body)
      }
    }
  }
})()