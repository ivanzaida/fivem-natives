import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_FREE_AIMING
 *
 * 0x1C751EF63BF4D501

 * 
 * Gets a value indicating whether the specified player is currently aiming freely.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerFreeAiming(player: PlayerIndex): boolean {
	const isPlayerFreeAiming_result = Citizen.invokeNative<boolean>('0x1C751EF63BF4D501', player);
	return isPlayerFreeAiming_result;
}