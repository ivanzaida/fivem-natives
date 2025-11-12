import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:REMOVE_ALL_PED_WEAPONS
 *
 * 0x1834D30866818A23

 * 
 * setting the last params to false it does that same so I would suggest its not a toggle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} deadCheck
 */
export function removeAllPedWeapons(ped: PedIndex, deadCheck: boolean = true): void {
	const removeAllPedWeapons_result = Citizen.invokeNative<void>('0x1834D30866818A23', ped, deadCheck);
	return removeAllPedWeapons_result;
}