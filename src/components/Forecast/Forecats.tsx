import React, { useEffect } from "react";
import styles from "./Forecast.module.css";
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDescription from "../CurrentDayDescription/CurrentDayDescription";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchWeatherByCityName } from "../../features/weather/weatherSlice";
import { Forecast } from "../../Types/types";

const Forecats: React.FC<{ weather: Forecast | null }> = ({ weather }) => {
  return (
    <main className={styles.Container}>
      <section className={styles.left}>
        <CurrentDay
          temp={weather?.main.temp}
          name={weather?.name}
          weather={weather?.weather[0].main}
        />
      </section>
      <section className={styles.right}>
        <CurrentDayDescription
          temp_max={weather?.main.temp_max}
          temp_min={weather?.main.temp_min}
          windSpeed={weather?.wind.speed}
        />

      </section>
    </main>
  );
};

export default Forecats;
