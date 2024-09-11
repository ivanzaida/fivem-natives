import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REMOVE_PED_HELMET
 *
 * 0xE4E1DBF4388028C0

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} forceRemove
 */
export function removePedHelmet(ped: PedIndex, forceRemove: boolean): void {
	const removePedHelmet_result = Citizen.invokeNative<void>('0xE4E1DBF4388028C0', ped, forceRemove);
	return removePedHelmet_result;
}