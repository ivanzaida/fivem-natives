import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_WAYPOINT_ROUTE_OFFSET
 *
 * 0x1549A6163A4CED2D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @returns {boolean}  
 */
export function setPedWaypointRouteOffset(ped: PedIndex, offsetX: number, offsetY: number, offsetZ: number): boolean {
	const setPedWaypointRouteOffset_result = Citizen.invokeNative<boolean>('0x1549A6163A4CED2D', ped, offsetX, offsetY, offsetZ);
	return setPedWaypointRouteOffset_result;
}