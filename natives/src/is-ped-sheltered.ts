import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SHELTERED
 *
 * 0x021754B7D780A311

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedSheltered(ped: PedIndex): boolean {
	const isPedSheltered_result = Citizen.invokeNative<boolean>('0x021754B7D780A311', ped);
	return isPedSheltered_result;
}