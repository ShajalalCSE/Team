import { useState } from "react";

const user = {
  name: 'Sha jalal',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize:90,
}

function MyButton(){
  const btn ={
    btnSize:50,
    fontSize:5,
  }
  const [count,setCount]=useState(0);
  function handle(){
    setCount(count+1);
    
  }
  return(
    <button onClick={handle}
    style={{
      width:btn.btnSize+10,
      height:btn.btnSize,
     
    }}
    >Clicked: {count} times</button>
  );
}

export default function Profile(){
  return(
    <>
    <h1>{user.name}</h1>
    
    <img
    className="avatar"
    src={user.imageUrl}
    alt={'Photo of '+ user.name}
    style={{
      width : user.imageSize,
      height:user.imageSize,

    }}
    
    
    />
    <MyButton/>
    </>
  );
}