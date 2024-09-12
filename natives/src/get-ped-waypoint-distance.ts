import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_PED_WAYPOINT_DISTANCE
 *
 * 0xD4AB5C0D7A1B6058

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedWaypointDistance(ped: PedIndex): number {
	const getPedWaypointDistance_result = Citizen.invokeNative<number>('0xD4AB5C0D7A1B6058', ped);
	return getPedWaypointDistance_result;
}