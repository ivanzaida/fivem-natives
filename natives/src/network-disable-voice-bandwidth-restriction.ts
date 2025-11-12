import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DISABLE_VOICE_BANDWIDTH_RESTRICTION
 *
 * 0x139268884A0795C9

 * 
 * Voice chat can be disabled in low bandwidth conditions - if voice chat is critical to gameplay, this needs to disabled/enabled
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function networkDisableVoiceBandwidthRestriction(player: PlayerIndex): void {
	const networkDisableVoiceBandwidthRestriction_result = Citizen.invokeNative<void>('0x139268884A0795C9', player);
	return networkDisableVoiceBandwidthRestriction_result;
}