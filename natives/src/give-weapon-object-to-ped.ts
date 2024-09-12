import { ObjectIndex, PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:GIVE_WEAPON_OBJECT_TO_PED
 *
 * 0x4693060C5049F4E3

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} weaponObject
 * @param {PedIndex} ped
 */
export function giveWeaponObjectToPed(weaponObject: ObjectIndex, ped: PedIndex): void {
	const giveWeaponObjectToPed_result = Citizen.invokeNative<void>('0x4693060C5049F4E3', weaponObject, ped);
	return giveWeaponObjectToPed_result;
}