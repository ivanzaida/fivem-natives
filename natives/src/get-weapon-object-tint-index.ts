import { ObjectIndex } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_OBJECT_TINT_INDEX
 *
 * 0x395F718BB649E570

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} weaponObject
 * @returns {number}  
 */
export function getWeaponObjectTintIndex(weaponObject: ObjectIndex): number {
	const getWeaponObjectTintIndex_result = Citizen.invokeNative<number>('0x395F718BB649E570', weaponObject);
	return getWeaponObjectTintIndex_result;
}