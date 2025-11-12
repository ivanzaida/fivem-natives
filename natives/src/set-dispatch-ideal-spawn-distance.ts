/**
 * MISC:SET_DISPATCH_IDEAL_SPAWN_DISTANCE
 *
 * 0x6625908717AE7808

 * 
 * Sets the ideal spawn distance for the dispatch services.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} idealSpawnDistance
 */
export function setDispatchIdealSpawnDistance(idealSpawnDistance: number): void {
	const setDispatchIdealSpawnDistance_result = Citizen.invokeNative<void>('0x6625908717AE7808', idealSpawnDistance);
	return setDispatchIdealSpawnDistance_result;
}