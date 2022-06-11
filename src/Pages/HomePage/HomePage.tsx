import {useEffect,useState} from 'react'

import styles from './Homepage.module.css'
import Forecats from '../../components/Forecast/Forecats'
import SearchBar from '../../components/SearchBar/SearchBar'
import { fetchWeatherByCityName,fetchWeatherByLocation } from '../../features/weather/weatherSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import useLocation from '../../Constants/hooks/locationHook'

const HomePage = () => {

  const [city,setCity] = useState<string>('')
  const dispatch = useAppDispatch()
  const {loading,error,weather} = useAppSelector(state => state.weather)

  const {position} = useLocation()
  
  useEffect(()=>{
    if(city){
     
    dispatch(fetchWeatherByCityName(city))
    }
    else{ 
     
      if(position){
        
        dispatch(fetchWeatherByLocation(position))
      }
    }
  },[city,position,dispatch])
  
  return (
    <div className={styles.Container}>
      <SearchBar setCity={setCity}/>
        {
          
     loading === 'pending' ? <div>Loading...</div> :
      error ? <div>Error</div> :
      weather ? <Forecats weather={weather}/> : 'There is no location'
      

        }
       
      
    </div>
  )
}

export default HomePage