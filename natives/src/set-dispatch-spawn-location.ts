/**
 * MISC:SET_DISPATCH_SPAWN_LOCATION
 *
 * 0xDB96C28A65D345EE

 * 
 * Sets the spawn location for the dispatch services.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} locationX
 * @param {number} locationY
 * @param {number} locationZ
 */
export function setDispatchSpawnLocation(locationX: number, locationY: number, locationZ: number): void {
	const setDispatchSpawnLocation_result = Citizen.invokeNative<void>('0xDB96C28A65D345EE', locationX, locationY, locationZ);
	return setDispatchSpawnLocation_result;
}