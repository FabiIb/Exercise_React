import { useEffect, useState } from "react";

function GitHubUser({username}) {
  const [data,setData]=useState("")
  async function fetchData(username){
      try {
          const response = await fetch(`https://api.github.com/users/${username}`)
          const data = await response.json()
          setData(data)
      } catch (error) {
          setError(error)
      }
  }
  useEffect(()=>{
      fetchData(username)
  },[username])
  return(
      <h1>{data.name}</h1>
  )
}
export default GitHubUser