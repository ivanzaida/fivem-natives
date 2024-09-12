import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_STEALTH_MOVEMENT
 *
 * 0X40321B83

 * Returns whether the entity is in stealth mode
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function getPedStealthMovement(ped: PedIndex): boolean {
	const getPedStealthMovement_result = Citizen.invokeNative<boolean>('0X40321B83', ped);
	return getPedStealthMovement_result;
}