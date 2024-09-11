import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_LANDING
 *
 * 0x285B49B5EF71E8ED

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedLanding(ped: PedIndex): boolean {
	const isPedLanding_result = Citizen.invokeNative<boolean>('0x285B49B5EF71E8ED', ped);
	return isPedLanding_result;
}