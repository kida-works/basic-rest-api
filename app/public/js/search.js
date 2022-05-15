const searchModulr = (()=>{
  const BASE_URL = "http:://localhost:3000/api/v1/search" 
  return {
    searchUsers: async () => {
      // 検索窓への入力を取得
      const query = document.getElementById('search').value
      const res = await fetch(BASE_URL + '?q=' + query)
      const reault = await res.json()

      let body = ""
       for (i=0; i<reault.length;i++ ){
         const user = result[i]
         body += `<tr>
                    <tb>${user.id}</tb>
                    <tb>${user.name}</tb>
                    <tb>${user.profile}</tb>
                    <tb>${user.date_of_birth}</tb>
                    <tb>${user.created_at}</tb>
                    <tb>${user.updated_at}</tb>
                  </tr>`
       }
    }
  }
})()