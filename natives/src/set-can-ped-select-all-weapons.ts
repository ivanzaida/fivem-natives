import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_CAN_PED_SELECT_ALL_WEAPONS
 *
 * 0xB21FD0EEB76F0296

 * 
 * Disable all weapons. Does the same as 0xB4771B9AAF4E68E4 except for all weapons.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} canSelect
 */
export function setCanPedSelectAllWeapons(ped: PedIndex, canSelect: boolean): void {
	const setCanPedSelectAllWeapons_result = Citizen.invokeNative<void>('0xB21FD0EEB76F0296', ped, canSelect);
	return setCanPedSelectAllWeapons_result;
}