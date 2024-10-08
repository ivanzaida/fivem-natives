import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:CLEAR_PLAYER_WANTED_LEVEL
 *
 * 0x54EA5BCC

 * This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);
 * PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function clearPlayerWantedLevel(player: PlayerIndex): void {
	const clearPlayerWantedLevel_result = Citizen.invokeNative<void>('0x54EA5BCC', player);
	return clearPlayerWantedLevel_result;
}