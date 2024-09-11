import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:IS_PLAYER_IN_CUTSCENE
 *
 * 0xF4102A2D0D824EC3

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId
 * @returns {boolean}  
 */
export function isPlayerInCutscene(playerId: PlayerIndex): boolean {
	const isPlayerInCutscene_result = Citizen.invokeNative<boolean>('0xF4102A2D0D824EC3', playerId);
	return isPlayerInCutscene_result;
}