import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_THRUSTER_THROTTLE
 *
 * 0X94E24C96

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} jetpack The jetpack to check.
 * @returns {number}  Returns a value representing the main throttle of the jetpack. The values range from `0.0` (no throttle) to `1.0` (full throttle)
 */
export function getThrusterThrottle(jetpack: VehicleIndex): number {
	const getThrusterThrottle_result = Citizen.invokeNative<number>('0X94E24C96', jetpack);
	return getThrusterThrottle_result;
}