import React from "react";

  //styles
import styles from "./CurrentDay.module.css";

  //ıcons
import locationIcon from "../../Constants/Assets/location-pin.png";
const CurrentDay: React.FC<{
  temp: number | undefined;
  weather: string | undefined;
  name: string | undefined;
}> = ({ temp, name, weather }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth() + 1];
  let celcius = Math.round(temp! - 273.15);
  return (
    <div className={styles.Container}>
      <div className={styles.img}></div>

      <article className={styles.top}>
        <div className={styles.today}>{day}</div>
        <div className={styles.date}>
          {month} {date}
        </div>
        <div className={styles.locationDiv}>
          <img src={locationIcon} className={styles.locationImg}></img>
          <div className={styles.City}>{name}</div>
        </div>
      </article>
      <article className={styles.bottom}>
        <div className={styles.temp}>{celcius}°C</div>
        <div className={styles.description}>{weather}</div>
      </article>
    </div>
  );
};

export default CurrentDay;
