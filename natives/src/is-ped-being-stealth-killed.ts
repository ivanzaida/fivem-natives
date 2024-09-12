import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_BEING_STEALTH_KILLED
 *
 * 0x145143011E40A843

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedBeingStealthKilled(ped: PedIndex): boolean {
	const isPedBeingStealthKilled_result = Citizen.invokeNative<boolean>('0x145143011E40A843', ped);
	return isPedBeingStealthKilled_result;
}