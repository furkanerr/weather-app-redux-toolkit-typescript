import React from "react";

//styles
import styles from "./Forecast.module.css";

//componets
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDescription from "../CurrentDayDescription/CurrentDayDescription";

//types
import { Forecast } from "../../Types/types";

const Forecats: React.FC<{ weather: Forecast | null }> = ({ weather }) => {
  return (
    <main className={styles.Container}>
      <section className={styles.left}>
        <CurrentDay
          temp={weather?.main?.temp}
          name={weather?.name}
          weather={weather?.weather[0]?.main}
        />
      </section>
      <section className={styles.right}>
        <CurrentDayDescription
          temp_max={weather?.main?.temp_max}
          temp_min={weather?.main?.temp_min}
          windSpeed={weather?.wind?.speed}
        />

      </section>
    </main>
  );
};

export default Forecats;
