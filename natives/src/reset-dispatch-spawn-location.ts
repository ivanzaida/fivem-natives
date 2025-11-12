/**
 * MISC:RESET_DISPATCH_SPAWN_LOCATION
 *
 * 0xB111CFC87C576C1C

 * 
 * Resets the spawn location for the dispatch services.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetDispatchSpawnLocation(): void {
	const resetDispatchSpawnLocation_result = Citizen.invokeNative<void>('0xB111CFC87C576C1C', );
	return resetDispatchSpawnLocation_result;
}