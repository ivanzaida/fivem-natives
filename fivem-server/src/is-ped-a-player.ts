import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_PED_A_PLAYER
 *
 * 0x404794CA

 * 
 * Returns true if the given ped has a valid pointer to CPlayerInfo in its CPed class. That's all.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedAPlayer(ped: PedIndex): boolean {
	const isPedAPlayer_result = Citizen.invokeNative<boolean>('0x404794CA', ped);
	return isPedAPlayer_result;
}