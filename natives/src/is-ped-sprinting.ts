import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_SPRINTING
 *
 * 0x6F21822F60DC0945

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedSprinting(ped: PedIndex): boolean {
	const isPedSprinting_result = Citizen.invokeNative<boolean>('0x6F21822F60DC0945', ped);
	return isPedSprinting_result;
}