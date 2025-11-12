import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SWEAT
 *
 * 0xB44335AF5013DA2A

 * 
 * Sweat is set to 100.0 or 0.0 in the decompiled scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} amount
 */
export function setPedSweat(ped: PedIndex, amount: number): void {
	const setPedSweat_result = Citizen.invokeNative<void>('0xB44335AF5013DA2A', ped, amount);
	return setPedSweat_result;
}