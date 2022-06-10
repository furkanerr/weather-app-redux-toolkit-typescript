import React from "react";
import styles from "./CurrentDayDes.module.css";
const CurrentDayDescription: React.FC<{
  temp_min: number | undefined;
  temp_max: number | undefined;
  windSpeed: number | undefined;
}> = ({ temp_max, temp_min, windSpeed }) => {
  let temp_minCelcius = Math.round(temp_min! - 273.15);
  let temp_maxCelcius = Math.round(temp_max! - 273.15);

  return (
    <article className={styles.weatherDetails}>
      <div className={styles.maxTemp}>
        <div className={styles.maxTempText}>Max:</div>
        <div className={styles.maxTempValue}>{temp_maxCelcius}°C</div>
      </div>
      <div className={styles.minMap}>
        <div className={styles.minMapText}>Min:</div>
        <div className={styles.minMapValue}>{temp_minCelcius}°C</div>
      </div>
      <div className={styles.wind}>
        <div className={styles.windText}>Wind:</div>
        <div className={styles.windValue}>{windSpeed}</div>
      </div>
    </article>
  );
};

export default CurrentDayDescription;
