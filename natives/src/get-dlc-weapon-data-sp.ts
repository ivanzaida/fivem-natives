import { ShopWeaponData } from '@ivanzaida/structures'

/**
 * FILES:GET_DLC_WEAPON_DATA_SP
 *
 * 0xA40B513DA7201333

 * 
 * Same as GET_DLC_WEAPON_DATA but only works for DLC weapons that are available in SP.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} dlc
 * @param {ShopWeaponData} weapon [Ref]
 * @returns {boolean}  
 */
export function getDlcWeaponDataSp(dlc: number, weapon: ShopWeaponData /* ptr */): boolean {
	const getDlcWeaponDataSp_result = Citizen.invokeNative<boolean>('0xA40B513DA7201333', dlc, weapon.dataView);
	return getDlcWeaponDataSp_result;
}