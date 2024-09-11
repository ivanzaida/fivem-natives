import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_MAX_STAMINA
 *
 * 0XD014AB79

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  The value of player max stamina.
 */
export function getPlayerMaxStamina(playerId: PlayerIndex): number {
	const getPlayerMaxStamina_result = Citizen.invokeNative<number>('0XD014AB79', playerId);
	return getPlayerMaxStamina_result;
}