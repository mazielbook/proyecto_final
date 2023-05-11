import components from './src/components'
import { getData } from './src/services'

const container = document.getElementById('container');

getData(res => {


  res.map(
    item => 
      container.appendChild(
        songComponent(item)
      )
  
  )

}) 


