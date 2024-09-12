import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_STAMINA
 *
 * 0xE415EC5C

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  The value of player stamina.
 */
export function getPlayerStamina(playerId: PlayerIndex): number {
	const getPlayerStamina_result = Citizen.invokeNative<number>('0xE415EC5C', playerId);
	return getPlayerStamina_result;
}