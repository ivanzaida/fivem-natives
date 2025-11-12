/**
 * TASK:TASK_FLUSH_ROUTE
 *
 * 0x076FB64D39D380B3

 * 
 * MulleKD19: Clears the current point route. Call this before TASK_EXTEND_ROUTE and TASK_FOLLOW_POINT_ROUTE.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function taskFlushRoute(): void {
	const taskFlushRoute_result = Citizen.invokeNative<void>('0x076FB64D39D380B3', );
	return taskFlushRoute_result;
}