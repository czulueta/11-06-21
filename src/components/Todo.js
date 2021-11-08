import React from "react"

export default function Todo(){
  return(
    <div>
      <h1>{ title }</h1>
      <h3>{ description }</h3>
      <img src={imgUrl} alt="image todo" width={300}/>
    </div>
  )
}