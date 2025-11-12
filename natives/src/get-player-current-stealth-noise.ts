import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_CURRENT_STEALTH_NOISE
 *
 * 0x5F93A870D439E8B4

 * 
 * The return value can roughly be considered as a noise range in meters, ramping down over time towards zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerCurrentStealthNoise(player: PlayerIndex): number {
	const getPlayerCurrentStealthNoise_result = Citizen.invokeNative<number>('0x5F93A870D439E8B4', player);
	return getPlayerCurrentStealthNoise_result;
}