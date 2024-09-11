/**
 * APP:APP_HAS_SYNCED_DATA
 *
 * 0xAEC6A486BE509E01

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {boolean}  
 */
export function appHasSyncedData(name: string): boolean {
	const appHasSyncedData_result = Citizen.invokeNative<boolean>('0xAEC6A486BE509E01', name);
	return appHasSyncedData_result;
}