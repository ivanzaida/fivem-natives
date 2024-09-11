import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_A_PARTICIPANT
 *
 * 0xCCD470854FB0E643

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plr
 * @returns {boolean}  
 */
export function networkIsPlayerAParticipant(plr: PlayerIndex): boolean {
	const networkIsPlayerAParticipant_result = Citizen.invokeNative<boolean>('0xCCD470854FB0E643', plr);
	return networkIsPlayerAParticipant_result;
}