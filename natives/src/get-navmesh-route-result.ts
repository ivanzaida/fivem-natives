import { PedIndex, ENavmeshRouteResult } from '@ivanzaida/structures'

/**
 * TASK:GET_NAVMESH_ROUTE_RESULT
 *
 * 0x604F9A1C471B5137

 * 
 * Retruns the state of any active TASK_FOLLOW_NAVMESH_TO_COORD task running on the ped
 * 
 * See GET_NAVMESH_ROUTE_DISTANCE_REMAINING for more details.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {ENavmeshRouteResult}  
 */
export function getNavmeshRouteResult(ped: PedIndex): ENavmeshRouteResult {
	const getNavmeshRouteResult_result = Citizen.invokeNative<ENavmeshRouteResult>('0x604F9A1C471B5137', ped);
	return getNavmeshRouteResult_result;
}