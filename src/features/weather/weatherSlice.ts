import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import Service from '../../services/api';
import { Forecast ,Coord } from '../../Types/types';

// First, create the thunk
export const fetchWeatherByCityName = createAsyncThunk(
  'weather/fetchWeatherByCityName',
  async (cityName: string, thunkAPI) => {
    const response = await Service.GetWeatherByCityName(cityName)
   return response 
    
  }
)


 export const fetchWeatherByLocation = createAsyncThunk(
  'weather/fetchWeatherByLocation',
  async (location:Coord, thunkAPI) => {
    console.log(location)
    const response = await Service.GetWeatherByCityLocation(location.lon,location.lat)
    console.log(response)
    return response;
  }
)

interface WeatherState {
  weather: Forecast | null;
  loading:  'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null | undefined;
}

// Define the initial state using that type
const initialState: WeatherState = {
  weather: null,
  loading: 'idle',
  error: null,
    

}

export const weatherSlice = createSlice({
  name: 'weather',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
  extraReducers: builder => {
    builder.addCase(fetchWeatherByCityName.pending, (state) => {
      state.loading =   'pending';
    }
    )
    builder.addCase(fetchWeatherByCityName.fulfilled, (state, action:PayloadAction<Forecast>) => {
      state.weather = action.payload;
      state.loading =   'succeeded';
    }
    )
    builder.addCase(fetchWeatherByCityName.rejected, (state) => {
      state.error = 'failed';
      state.loading =  'failed';
    }
    )

    builder.addCase(fetchWeatherByLocation.pending, (state) => {
      state.loading =   'pending';
    }
    )
    builder.addCase(fetchWeatherByLocation.fulfilled, (state, action:PayloadAction<Forecast>) => {
      state.weather = action.payload;
      state.loading =   'succeeded';
    } 
    )
    builder.addCase(fetchWeatherByLocation.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading =   'failed';
    }
    )

} })


export const { } = weatherSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.weather.weather

export default weatherSlice.reducer