import { IntRef, FloatRef } from '@ivanzaida/structures'

/**
 * MISC:GET_CURR_WEATHER_STATE
 *
 * 0x239D73A1DE006629

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} prevTypeHashName [Ref]
 * @param {IntRef} nextTypeHashName [Ref]
 * @param {FloatRef} interpVal [Ref]
 */
export function getCurrWeatherState(prevTypeHashName: IntRef /* ptr */, nextTypeHashName: IntRef /* ptr */, interpVal: FloatRef /* ptr */): void {
	const getCurrWeatherState_result = Citizen.invokeNative<void>('0x239D73A1DE006629', prevTypeHashName.dataView, nextTypeHashName.dataView, interpVal.dataView);
	return getCurrWeatherState_result;
}