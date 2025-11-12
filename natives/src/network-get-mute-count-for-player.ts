import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_MUTE_COUNT_FOR_PLAYER
 *
 * 0x43D614D95E50418D

 * 
 * Get the mute count and number of talkers met for the given player
 * 
 * NETWORK_GET_M[A-U]
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} index
 * @param {IntRef} outMuteCount [Ref]
 * @param {IntRef} outTalkerCount [Ref]
 */
export function networkGetMuteCountForPlayer(index: PlayerIndex, outMuteCount: IntRef /* ptr */, outTalkerCount: IntRef /* ptr */): void {
	const networkGetMuteCountForPlayer_result = Citizen.invokeNative<void>('0x43D614D95E50418D', index, outMuteCount.dataView, outTalkerCount.dataView);
	return networkGetMuteCountForPlayer_result;
}