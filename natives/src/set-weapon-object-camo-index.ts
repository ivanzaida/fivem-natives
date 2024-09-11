import { ObjectIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_WEAPON_OBJECT_CAMO_INDEX
 *
 * 0x2B73BEAD61E67B73

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} weaponObject
 * @param {number} camo
 */
export function setWeaponObjectCamoIndex(weaponObject: ObjectIndex, camo: number): void {
	const setWeaponObjectCamoIndex_result = Citizen.invokeNative<void>('0x2B73BEAD61E67B73', weaponObject, camo);
	return setWeaponObjectCamoIndex_result;
}