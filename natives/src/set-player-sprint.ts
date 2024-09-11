import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_SPRINT
 *
 * 0x0E0E682049E26249

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} disableSprint
 */
export function setPlayerSprint(player: PlayerIndex, disableSprint: boolean): void {
	const setPlayerSprint_result = Citizen.invokeNative<void>('0x0E0E682049E26249', player, disableSprint);
	return setPlayerSprint_result;
}