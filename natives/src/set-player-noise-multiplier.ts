import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_NOISE_MULTIPLIER
 *
 * 0xF75E68D9DCB8C80B

 * 
 * Sets how noisy a player is for AI reaction purposes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} mult
 */
export function setPlayerNoiseMultiplier(player: PlayerIndex, mult: number): void {
	const setPlayerNoiseMultiplier_result = Citizen.invokeNative<void>('0xF75E68D9DCB8C80B', player, mult);
	return setPlayerNoiseMultiplier_result;
}