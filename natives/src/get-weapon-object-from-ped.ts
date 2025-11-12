import { PedIndex, ObjectIndex } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_OBJECT_FROM_PED
 *
 * 0xEA7D61B52729ED38

 * 
 * Drops the current weapon and returns the object
 * 
 * Unknown behavior when unarmed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} doDeadCheck
 * @returns {ObjectIndex}  
 */
export function getWeaponObjectFromPed(ped: PedIndex, doDeadCheck: boolean = true): ObjectIndex {
	const getWeaponObjectFromPed_result = Citizen.invokeNative<ObjectIndex>('0xEA7D61B52729ED38', ped, doDeadCheck);
	return getWeaponObjectFromPed_result;
}