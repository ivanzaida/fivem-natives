/**
 * MISC:RESET_DISPATCH_SPAWN_BLOCKING_AREAS
 *
 * 0x0FE4FED766438E0E

 * 
 * Resets the dispatch spawn blocking areas.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetDispatchSpawnBlockingAreas(): void {
	const resetDispatchSpawnBlockingAreas_result = Citizen.invokeNative<void>('0x0FE4FED766438E0E', );
	return resetDispatchSpawnBlockingAreas_result;
}