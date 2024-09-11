/**
 * EVENT:REMOVE_SHOCKING_EVENT_SPAWN_BLOCKING_AREAS
 *
 * 0x8113594C36A951EF

 * 
 * ------------------------------------------------------------------
 */
export function removeShockingEventSpawnBlockingAreas(): void {
	const removeShockingEventSpawnBlockingAreas_result = Citizen.invokeNative<void>('0x8113594C36A951EF', );
	return removeShockingEventSpawnBlockingAreas_result;
}