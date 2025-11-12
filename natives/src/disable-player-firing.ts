import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:DISABLE_PLAYER_FIRING
 *
 * 0xEF387B90B8B97EDA

 * 
 * Inhibits the player from using any method of combat including melee and firearms.
 * 
 * NOTE: Only disables the firing for one frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} disable
 */
export function disablePlayerFiring(player: PlayerIndex, disable: boolean): void {
	const disablePlayerFiring_result = Citizen.invokeNative<void>('0xEF387B90B8B97EDA', player, disable);
	return disablePlayerFiring_result;
}