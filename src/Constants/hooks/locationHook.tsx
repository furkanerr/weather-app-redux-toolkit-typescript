import {useState,useEffect} from 'react'
import { Coord } from '../../Types/types'
const useLocation = () => {
  
    const [position,setPosition] = useState<Coord>()
    const [errorLocation,setError] = useState<string>('')
    const [loadingLocation,setLoading] = useState<boolean>(false)

    const onError = (error:GeolocationPositionError) => {
        setError(error.message)
        setLoading(false)
    } 
    const onSuccess =  (position: GeolocationPosition) => {
        console.log(position)
        setPosition( {lat:position.coords.latitude,lon:position.coords.longitude})
        setLoading(false)
    }
    
    useEffect(  ()=>{
        if(navigator.geolocation){
            setLoading(true)
            navigator.geolocation.getCurrentPosition(
                onSuccess,
                onError,
            )
        }
    },[])
    
    return {position,errorLocation,loadingLocation}
}

export default useLocation