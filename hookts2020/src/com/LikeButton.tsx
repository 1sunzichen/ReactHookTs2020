//useState
import React,{useState} from 'react';
const LikeButton:React.FC=()=>{
  const [count,setCount]=useState({like:0,on:true});
  
  return(
    <>
    <button onClick={()=>{setCount({like:count.like+1,on:count.on})}}>
      {count.like}👍
    </button>
    <button onClick={()=>{setCount({like:count.like,on:!count.on})}}>
      {count.on?"ON":"OFF"}
    </button>
    </>
  )
}
export default LikeButton