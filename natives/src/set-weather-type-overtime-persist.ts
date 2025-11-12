/**
 * MISC:SET_WEATHER_TYPE_OVERTIME_PERSIST
 *
 * 0xE0F4EA3A654155A3

 * 
 * The weather string are in weather.dat file
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} newWeather
 * @param {number} time
 */
export function setWeatherTypeOvertimePersist(newWeather: string, time: number): void {
	const setWeatherTypeOvertimePersist_result = Citizen.invokeNative<void>('0xE0F4EA3A654155A3', newWeather, time);
	return setWeatherTypeOvertimePersist_result;
}