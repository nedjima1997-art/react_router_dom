import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const Data = () => {
  const dogUrl= useLoaderData()
  const {id}= useParams()
  return (
    <div>
      <h1>ID:{id}</h1>
      <img src={dogUrl} alt='Image de chien'/>
    </div>
  )
}
export const DataLoader = async() => {
  const response = await fetch ("https://random.dog/woof.json")
  const data = await response.json()
  return data.url

}
