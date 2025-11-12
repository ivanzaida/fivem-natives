import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_DEBUG_INVINCIBLE
 *
 * 0xD390851FAFF577C2

 * 
 * Always returns false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function getPlayerDebugInvincible(player: PlayerIndex): boolean {
	const getPlayerDebugInvincible_result = Citizen.invokeNative<boolean>('0xD390851FAFF577C2', player);
	return getPlayerDebugInvincible_result;
}