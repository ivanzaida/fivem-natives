import { PedIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_APPLY_CACHED_PLAYER_HEAD_BLEND_DATA
 *
 * 0x7241E3AD10840886

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkApplyCachedPlayerHeadBlendData(ped: PedIndex, player: PlayerIndex): boolean {
	const networkApplyCachedPlayerHeadBlendData_result = Citizen.invokeNative<boolean>('0x7241E3AD10840886', ped, player);
	return networkApplyCachedPlayerHeadBlendData_result;
}