/**
 * FILES:GET_NUM_DLC_WEAPON_COMPONENTS_SP
 *
 * 0x0A334014DFD4952C

 * 
 * Returns the total number of DLC weapon components that are available in SP.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} dlc
 * @returns {number}  
 */
export function getNumDlcWeaponComponentsSp(dlc: number): number {
	const getNumDlcWeaponComponentsSp_result = Citizen.invokeNative<number>('0x0A334014DFD4952C', dlc);
	return getNumDlcWeaponComponentsSp_result;
}