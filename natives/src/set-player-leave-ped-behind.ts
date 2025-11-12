import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_LEAVE_PED_BEHIND
 *
 * 0xC4A38E060739AAF9

 * 
 * Enable/disable whether a player leaves behind a ped if they leave a session.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} leavePedBehind
 */
export function setPlayerLeavePedBehind(player: PlayerIndex, leavePedBehind: boolean): void {
	const setPlayerLeavePedBehind_result = Citizen.invokeNative<void>('0xC4A38E060739AAF9', player, leavePedBehind);
	return setPlayerLeavePedBehind_result;
}