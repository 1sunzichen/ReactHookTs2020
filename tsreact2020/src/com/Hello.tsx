import React from 'react'
interface IProps {
  message: string
}
const Hello = (props: IProps) => {
  return <h2>{props.message}</h2>
}
export default Hello
