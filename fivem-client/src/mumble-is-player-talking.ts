import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:MUMBLE_IS_PLAYER_TALKING
 *
 * 0X33EEF97F

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player The target player.
 * @returns {boolean}  Whether or not the player is talking.
 */
export function mumbleIsPlayerTalking(player: PlayerIndex): boolean {
	const mumbleIsPlayerTalking_result = Citizen.invokeNative<boolean>('0X33EEF97F', player);
	return mumbleIsPlayerTalking_result;
}