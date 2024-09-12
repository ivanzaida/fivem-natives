import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_THRUSTER_SIDE_RCS_THROTTLE
 *
 * 0X1C939E87

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} jetpack The jetpack to check.
 * @returns {number}  Returns a value representing the side RCS (Reaction Control System) throttle of the jetpack. The values range from `0.0` (no throttle) to `1.0` (full throttle).
 */
export function getThrusterSideRcsThrottle(jetpack: VehicleIndex): number {
	const getThrusterSideRcsThrottle_result = Citizen.invokeNative<number>('0X1C939E87', jetpack);
	return getThrusterSideRcsThrottle_result;
}