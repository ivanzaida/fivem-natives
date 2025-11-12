import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_CONTROL_ON
 *
 * 0xE916D57851F785AB

 * 
 * Can the player control himself, used to disable controls for player for things like a cutscene.
 * 
 * ---
 * 
 * You can't disable controls with this, use SET_PLAYER_CONTROL(...) for this.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerControlOn(player: PlayerIndex): boolean {
	const isPlayerControlOn_result = Citizen.invokeNative<boolean>('0xE916D57851F785AB', player);
	return isPlayerControlOn_result;
}