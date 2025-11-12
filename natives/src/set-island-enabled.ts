/**
 * STREAMING:SET_ISLAND_ENABLED
 *
 * 0x105F8712C3E145BF

 * 
 * Enables the specified island. For more information, see islandhopper.meta
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} islandName
 * @param {boolean} enabled
 */
export function setIslandEnabled(islandName: string, enabled: boolean): void {
	const setIslandEnabled_result = Citizen.invokeNative<void>('0x105F8712C3E145BF', islandName, enabled);
	return setIslandEnabled_result;
}