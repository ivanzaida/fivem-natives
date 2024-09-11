import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_PLAYER_INDEX_IS_CHEATER
 *
 * 0x0686D5124777B9BE

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkPlayerIndexIsCheater(player: PlayerIndex): boolean {
	const networkPlayerIndexIsCheater_result = Citizen.invokeNative<boolean>('0x0686D5124777B9BE', player);
	return networkPlayerIndexIsCheater_result;
}