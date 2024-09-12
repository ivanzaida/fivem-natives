import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_FAKE_WANTED_LEVEL
 *
 * 0x98D244

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerFakeWantedLevel(player: PlayerIndex): number {
	const getPlayerFakeWantedLevel_result = Citizen.invokeNative<number>('0x98D244', player);
	return getPlayerFakeWantedLevel_result;
}