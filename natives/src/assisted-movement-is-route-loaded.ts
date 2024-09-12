/**
 * TASK:ASSISTED_MOVEMENT_IS_ROUTE_LOADED
 *
 * 0x6C9A2A441E73E5E6

 * 
 * ------------------------------------------------------------------
 * @param {string} routeName
 * @returns {boolean}  
 */
export function assistedMovementIsRouteLoaded(routeName: string): boolean {
	const assistedMovementIsRouteLoaded_result = Citizen.invokeNative<boolean>('0x6C9A2A441E73E5E6', routeName);
	return assistedMovementIsRouteLoaded_result;
}