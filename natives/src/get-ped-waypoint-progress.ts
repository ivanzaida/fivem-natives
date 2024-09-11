import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_PED_WAYPOINT_PROGRESS
 *
 * 0x9558BBC6B5B65853

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedWaypointProgress(ped: PedIndex): number {
	const getPedWaypointProgress_result = Citizen.invokeNative<number>('0x9558BBC6B5B65853', ped);
	return getPedWaypointProgress_result;
}