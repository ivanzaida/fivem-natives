import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_MALE
 *
 * 0xB98B1A5B59BC5065

 * 
 * Returns true/false if the ped is/isn't male.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedMale(ped: PedIndex): boolean {
	const isPedMale_result = Citizen.invokeNative<boolean>('0xB98B1A5B59BC5065', ped);
	return isPedMale_result;
}