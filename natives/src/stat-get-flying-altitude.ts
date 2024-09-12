import { FloatRef } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_FLYING_ALTITUDE
 *
 * 0x2B2ABCEBD9B1F36F

 * 
 * ------------------------------------------------------------------
 * @param {FloatRef} value [Ref]
 * @returns {boolean}  
 */
export function statGetFlyingAltitude(value: FloatRef /* ptr */): boolean {
	const statGetFlyingAltitude_result = Citizen.invokeNative<boolean>('0x2B2ABCEBD9B1F36F', value.dataView);
	return statGetFlyingAltitude_result;
}