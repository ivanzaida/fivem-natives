import { ObjectIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_WEAPON_OBJECT_TINT_INDEX
 *
 * 0xFA3F484500EC0E85

 * 
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} weaponObject
 * @param {number} tint
 */
export function setWeaponObjectTintIndex(weaponObject: ObjectIndex, tint: number): void {
	const setWeaponObjectTintIndex_result = Citizen.invokeNative<void>('0xFA3F484500EC0E85', weaponObject, tint);
	return setWeaponObjectTintIndex_result;
}