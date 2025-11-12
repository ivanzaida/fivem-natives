/**
 * TASK:CLOSE_PATROL_ROUTE
 *
 * 0xD769493B5A72D117

 * 
 * Tells the code that all the nodes and links have been added.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function closePatrolRoute(): void {
	const closePatrolRoute_result = Citizen.invokeNative<void>('0xD769493B5A72D117', );
	return closePatrolRoute_result;
}