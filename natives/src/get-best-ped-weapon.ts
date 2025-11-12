import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_BEST_PED_WEAPON
 *
 * 0xF3D409E30929BD33

 * 
 * p1 is always 0 in the scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} ignoreAmmoCheck
 * @returns {EWeaponType}  
 */
export function getBestPedWeapon(ped: PedIndex, ignoreAmmoCheck: boolean = false): EWeaponType {
	const getBestPedWeapon_result = Citizen.invokeNative<EWeaponType>('0xF3D409E30929BD33', ped, ignoreAmmoCheck);
	return getBestPedWeapon_result;
}