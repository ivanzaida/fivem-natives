import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_CURRENT_WEAPON_VISIBLE
 *
 * 0x4D5D5614C2DF76F4

 * 
 * Has 5 parameters since latest patches.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} visibleFlag
 * @param {boolean} destroyObject
 * @param {boolean} deadCheck
 * @param {boolean} storeDestroyedWeaponClipValue
 */
export function setPedCurrentWeaponVisible(ped: PedIndex, visibleFlag: boolean, destroyObject: boolean = true, deadCheck: boolean = true, storeDestroyedWeaponClipValue: boolean = false): void {
	const setPedCurrentWeaponVisible_result = Citizen.invokeNative<void>('0x4D5D5614C2DF76F4', ped, visibleFlag, destroyObject, deadCheck, storeDestroyedWeaponClipValue);
	return setPedCurrentWeaponVisible_result;
}