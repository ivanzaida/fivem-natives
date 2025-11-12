import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * PED:IS_PED_BEING_STUNNED
 *
 * 0x11BF418D1AFD7970

 * 
 * p1 is always 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @returns {boolean}  
 */
export function isPedBeingStunned(ped: PedIndex, weaponType: EWeaponType | number = 0): boolean {
	const isPedBeingStunned_result = Citizen.invokeNative<boolean>('0x11BF418D1AFD7970', ped, weaponType);
	return isPedBeingStunned_result;
}