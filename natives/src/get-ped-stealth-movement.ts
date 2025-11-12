import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_STEALTH_MOVEMENT
 *
 * 0xC2BF1F6F84E31EB2

 * 
 * Returns whether the entity is in stealth mode
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function getPedStealthMovement(ped: PedIndex): boolean {
	const getPedStealthMovement_result = Citizen.invokeNative<boolean>('0xC2BF1F6F84E31EB2', ped);
	return getPedStealthMovement_result;
}