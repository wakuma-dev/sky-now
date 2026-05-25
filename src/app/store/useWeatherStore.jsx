import { create } from 'zustand';

const useWeatherStore = create((set) => ({
  city: "London",
  setCity: (city) => set({city}),
}));

export default useWeatherStore;