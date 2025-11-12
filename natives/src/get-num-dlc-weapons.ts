/**
 * FILES:GET_NUM_DLC_WEAPONS
 *
 * 0x9A7818E159C72516

 * 
 * Returns the total number of DLC weapons.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumDlcWeapons(): number {
	const getNumDlcWeapons_result = Citizen.invokeNative<number>('0x9A7818E159C72516', );
	return getNumDlcWeapons_result;
}