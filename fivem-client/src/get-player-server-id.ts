import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_SERVER_ID
 *
 * 0x4D97BCC7

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerServerId(player: PlayerIndex): number {
	const getPlayerServerId_result = Citizen.invokeNative<number>('0x4D97BCC7', player);
	return getPlayerServerId_result;
}