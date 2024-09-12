import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_CACHED_PLAYER_HEAD_BLEND_DATA
 *
 * 0x5B5089244DF8EA05

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkHasCachedPlayerHeadBlendData(player: PlayerIndex): boolean {
	const networkHasCachedPlayerHeadBlendData_result = Citizen.invokeNative<boolean>('0x5B5089244DF8EA05', player);
	return networkHasCachedPlayerHeadBlendData_result;
}