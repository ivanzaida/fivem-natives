import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:IS_PED_CURRENT_WEAPON_SILENCED
 *
 * 0x3C2402675D8FFADA

 * 
 * This native returns a true or false value.
 * 
 * Ped ped = The ped whose weapon you want to check.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedCurrentWeaponSilenced(ped: PedIndex): boolean {
	const isPedCurrentWeaponSilenced_result = Citizen.invokeNative<boolean>('0x3C2402675D8FFADA', ped);
	return isPedCurrentWeaponSilenced_result;
}