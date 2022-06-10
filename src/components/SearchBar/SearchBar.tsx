import React from 'react'
import styles from './SearchBar.module.css';

const SearchBar:React.FC<{setCity:React.Dispatch<React.SetStateAction<string>>}> = ({setCity} ) => {
    const [city,setCityState] = React.useState<string>('')
    const handleClick =()=>{
        setCity(city)
        setCityState('')
    }
    const handleKeypress = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            setCity(city)
            setCityState('')
        }
    }
    
  return (
    <div className={styles.Container}>

        <input className={styles.searchBar} type="text" onChange={(e) => setCityState(e.target.value)} onKeyPress={handleKeypress} placeholder="Search for City" />
        <button className={styles.submitCityButton} onClick={handleClick}>Ara</button>
    </div>
  )
}

export default SearchBar