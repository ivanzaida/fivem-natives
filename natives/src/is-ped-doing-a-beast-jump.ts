import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_DOING_A_BEAST_JUMP
 *
 * 0xC77607B4F69D0DFD

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedDoingABeastJump(ped: PedIndex): boolean {
	const isPedDoingABeastJump_result = Citizen.invokeNative<boolean>('0xC77607B4F69D0DFD', ped);
	return isPedDoingABeastJump_result;
}