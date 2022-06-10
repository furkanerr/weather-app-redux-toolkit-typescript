import React,{useEffect,useState} from 'react'
import Service from '../../services/api'
import styles from './Homepage.module.css'
import Forecats from '../../components/Forecast/Forecats'
import SearchBar from '../../components/SearchBar/SearchBar'
import { fetchWeatherByCityName,fetchWeatherByLocation } from '../../features/weather/weatherSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import useLocation from '../../Constants/hooks/locationHook'
import { Coord } from '../../Types/types'
const HomePage = () => {

  const [city,setCity] = useState<string>('')
  const dispatch = useAppDispatch()
  const {loading,error,weather} = useAppSelector(state => state.weather)

  const {position,errorLocation,loadingLocation} = useLocation()
  useEffect(()=>{
    if(city){
    dispatch(fetchWeatherByCityName(city))
    }
    else{
      console.log(position)
      if(position){
        
        dispatch(fetchWeatherByLocation(position))
      }
    }
  },[city])
  
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