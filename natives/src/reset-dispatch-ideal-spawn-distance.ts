/**
 * MISC:RESET_DISPATCH_IDEAL_SPAWN_DISTANCE
 *
 * 0xD7186A4A316964F2

 * 
 * Resets the ideal spawn distance for the dispatch services.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetDispatchIdealSpawnDistance(): void {
	const resetDispatchIdealSpawnDistance_result = Citizen.invokeNative<void>('0xD7186A4A316964F2', );
	return resetDispatchIdealSpawnDistance_result;
}