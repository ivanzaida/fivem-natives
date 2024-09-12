import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_FAKE_WANTED_LEVEL
 *
 * 0x0F9DAC8C6B952C2B

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerFakeWantedLevel(player: PlayerIndex): number {
	const getPlayerFakeWantedLevel_result = Citizen.invokeNative<number>('0x0F9DAC8C6B952C2B', player);
	return getPlayerFakeWantedLevel_result;
}