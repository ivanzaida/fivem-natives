import { EWeaponType, EWeaponSlot } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPONTYPE_SLOT
 *
 * 0xF06CB8927A8EE0DE

 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weapon
 * @returns {EWeaponSlot}  
 */
export function getWeapontypeSlot(weapon: EWeaponType | number): EWeaponSlot {
	const getWeapontypeSlot_result = Citizen.invokeNative<EWeaponSlot>('0xF06CB8927A8EE0DE', weapon);
	return getWeapontypeSlot_result;
}