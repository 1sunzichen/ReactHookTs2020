import React,{useState,useEffect} from 'react';
const MouseTracker:React.FC=()=>{
  const [position,setPosition]=useState({x:0,y:0})
  useEffect(()=>{
    const update=(e:MouseEvent)=>{
      setPosition({x:e.clientX,y:e.clientY})
    }
    console.log('render');
    
    document.addEventListener('click',update)
    return ()=>{
        document.removeEventListener('click',update)
    }
  })
  return (
    <>
      <p>
          {position.x}
          {position.y}
      </p>
    </>
  )
}
export default MouseTracker;