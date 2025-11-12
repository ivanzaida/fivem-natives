import { PedIndex, FloatRef, IntRef, ENavmeshRouteResult } from '@ivanzaida/structures'

/**
 * TASK:GET_NAVMESH_ROUTE_DISTANCE_REMAINING
 *
 * 0x32ABB6392C917150

 * 
 * Peds navigate long distances using a series of smaller sub-routes.  Only one sub-route is ever stored in the navmesh task.
 * This script function queries that subroute to determine how much distance is left on it.  Therefore:
 * You can only really trust the results of this function if "bThisIsLastRouteSection" returns as TRUE
 * Otherwise there may be any number of further sub-route sections remaining, but not yet calcualted..  Be careful
 * 
 * Looks like the last parameter returns true if the path has been calculated, while the first returns the remaining distance to the end of the path.
 * Return value of native is the same as GET_NAVMESH_ROUTE_RESULT
 * Looks like the native returns an int for the path's state:
 * 1 - ???
 * 2 - ???
 * 3 - Finished Generating
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {FloatRef} outDistanceRemaining [Ref]
 * @param {IntRef} outThisIsLastRouteSection [Ref]
 * @returns {ENavmeshRouteResult}  
 */
export function getNavmeshRouteDistanceRemaining(ped: PedIndex, outDistanceRemaining: FloatRef /* ptr */, outThisIsLastRouteSection: IntRef /* ptr */): ENavmeshRouteResult {
	const getNavmeshRouteDistanceRemaining_result = Citizen.invokeNative<ENavmeshRouteResult>('0x32ABB6392C917150', ped, outDistanceRemaining.dataView, outThisIsLastRouteSection.dataView);
	return getNavmeshRouteDistanceRemaining_result;
}