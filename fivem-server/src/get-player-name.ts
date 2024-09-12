import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_NAME
 *
 * 0X406B4B20

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {string}  
 */
export function getPlayerName(player: PlayerIndex): string {
	const getPlayerName_result = Citizen.invokeNative<string>('0X406B4B20', player);
	return getPlayerName_result;
}