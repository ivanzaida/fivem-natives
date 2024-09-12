/**
 * TASK:ASSISTED_MOVEMENT_REMOVE_ROUTE
 *
 * 0xA332714024BC3F0C

 * 
 * ------------------------------------------------------------------
 * @param {string} routeName
 */
export function assistedMovementRemoveRoute(routeName: string): void {
	const assistedMovementRemoveRoute_result = Citizen.invokeNative<void>('0xA332714024BC3F0C', routeName);
	return assistedMovementRemoveRoute_result;
}