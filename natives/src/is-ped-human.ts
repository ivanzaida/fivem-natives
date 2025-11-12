import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_HUMAN
 *
 * 0x26A004F4BA50E71C

 * 
 * Returns true/false if the ped is/isn't humanoid.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedHuman(ped: PedIndex): boolean {
	const isPedHuman_result = Citizen.invokeNative<boolean>('0x26A004F4BA50E71C', ped);
	return isPedHuman_result;
}