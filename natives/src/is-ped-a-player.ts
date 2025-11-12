import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_A_PLAYER
 *
 * 0x501EBB0523078750

 * 
 * Returns true if the given ped has a valid pointer to CPlayerInfo in its CPed class. That's all.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedAPlayer(ped: PedIndex): boolean {
	const isPedAPlayer_result = Citizen.invokeNative<boolean>('0x501EBB0523078750', ped);
	return isPedAPlayer_result;
}