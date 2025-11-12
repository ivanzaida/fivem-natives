import { ObjectIndex, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_OBJECT_COMPONENT_TINT_INDEX
 *
 * 0x7EC58BF54CD9DC57

 * 
 * Returns -1 if camoComponentHash is invalid/not attached to the weapon object.
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} weaponObject
 * @param {EWeaponcomponentType} componentType
 * @returns {number}  
 */
export function getWeaponObjectComponentTintIndex(weaponObject: ObjectIndex, componentType: EWeaponcomponentType | number): number {
	const getWeaponObjectComponentTintIndex_result = Citizen.invokeNative<number>('0x7EC58BF54CD9DC57', weaponObject, componentType);
	return getWeaponObjectComponentTintIndex_result;
}