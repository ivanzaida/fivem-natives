/**
 * TASK:CREATE_PATROL_ROUTE
 *
 * 0xF41DCE3B39E05E82

 * 
 * This can only be called once a valid a ptrol route has been added.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function createPatrolRoute(): void {
	const createPatrolRoute_result = Citizen.invokeNative<void>('0xF41DCE3B39E05E82', );
	return createPatrolRoute_result;
}