/**
 * FILES:GET_NUM_DLC_WEAPONS_SP
 *
 * 0xAFA659708600A8CD

 * 
 * Returns the total number of DLC weapons that are available in SP (availableInSP field in shop_weapon.meta).
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumDlcWeaponsSp(): number {
	const getNumDlcWeaponsSp_result = Citizen.invokeNative<number>('0xAFA659708600A8CD', );
	return getNumDlcWeaponsSp_result;
}