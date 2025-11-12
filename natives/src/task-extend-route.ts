/**
 * TASK:TASK_EXTEND_ROUTE
 *
 * 0x8B59380D9D15EBCD

 * 
 * Use TASK_FLUSH_ROUTE to make the route empty.
 * 
 * MulleKD19: Adds a new point to the current point route. Call TASK_FLUSH_ROUTE before the first call to this. Call TASK_FOLLOW_POINT_ROUTE to make the Ped go the route.
 * 
 * A maximum of 8 points can be added.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function taskExtendRoute(coorsX: number, coorsY: number, coorsZ: number): void {
	const taskExtendRoute_result = Citizen.invokeNative<void>('0x8B59380D9D15EBCD', coorsX, coorsY, coorsZ);
	return taskExtendRoute_result;
}