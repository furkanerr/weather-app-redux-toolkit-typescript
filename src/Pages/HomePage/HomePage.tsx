import React,{useEffect,useState} from 'react'
import Service from '../../services/api'
import styles from './Homepage.module.css'
import Forecats from '../../components/Forecast/Forecats'
import SearchBar from '../../components/SearchBar/SearchBar'
import { fetchWeatherByCityName } from '../../features/weather/weatherSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
const HomePage = () => {

  const [city,setCity] = useState<string>('')
  const dispatch = useAppDispatch()
  const {loading,error,weather} = useAppSelector(state => state.weather)
  useEffect(()=>{
    if(city){
    dispatch(fetchWeatherByCityName(city))
    }
  },[city])
  //if(loading) return <div>Loading...</div>
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