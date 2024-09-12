import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_PRESSING_HORN
 *
 * 0x692665178199313C

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerPressingHorn(player: PlayerIndex): boolean {
	const isPlayerPressingHorn_result = Citizen.invokeNative<boolean>('0x692665178199313C', player);
	return isPlayerPressingHorn_result;
}