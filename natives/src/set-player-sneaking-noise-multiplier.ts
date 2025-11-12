import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_SNEAKING_NOISE_MULTIPLIER
 *
 * 0x92F9E3A242F41E98

 * 
 * Sets how noisy a player is while sneaking for AI reaction purposes.
 * 
 * Values around 1.0f to 2.0f used in game scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} mult
 */
export function setPlayerSneakingNoiseMultiplier(player: PlayerIndex, mult: number): void {
	const setPlayerSneakingNoiseMultiplier_result = Citizen.invokeNative<void>('0x92F9E3A242F41E98', player, mult);
	return setPlayerSneakingNoiseMultiplier_result;
}