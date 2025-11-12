/**
 * FILES:GET_NUM_DLC_WEAPON_COMPONENTS
 *
 * 0x660FA55F8D417CAB

 * 
 * Returns the total number of DLC weapon components.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} dlc
 * @returns {number}  
 */
export function getNumDlcWeaponComponents(dlc: number): number {
	const getNumDlcWeaponComponents_result = Citizen.invokeNative<number>('0x660FA55F8D417CAB', dlc);
	return getNumDlcWeaponComponents_result;
}