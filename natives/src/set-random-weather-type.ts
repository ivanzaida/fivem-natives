/**
 * MISC:SET_RANDOM_WEATHER_TYPE
 *
 * 0x9E392E2DB654EE0A

 * 
 * ------------------------------------------------------------------
 */
export function setRandomWeatherType(): void {
	const setRandomWeatherType_result = Citizen.invokeNative<void>('0x9E392E2DB654EE0A', );
	return setRandomWeatherType_result;
}