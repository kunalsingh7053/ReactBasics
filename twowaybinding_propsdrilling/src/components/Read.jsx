
const Read = (props) => {
        console.log(props)
        const users = props.users;
        const setuser = props.setuser;
 const render = props.users.map((user,index)=>{
  return <li key={index}> name:-{user.name}||age:-{user.age}</li>
 })

  return (
    <div>
        <h1>User Data</h1>
        <ul>{render}</ul>

    </div>
  )
}

export default Read
