import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_DROPS_WEAPON
 *
 * 0x08AABCACF8F4828E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedDropsWeapon(ped: PedIndex): void {
	const setPedDropsWeapon_result = Citizen.invokeNative<void>('0x08AABCACF8F4828E', ped);
	return setPedDropsWeapon_result;
}