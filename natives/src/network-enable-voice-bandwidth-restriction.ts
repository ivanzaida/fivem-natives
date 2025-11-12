import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ENABLE_VOICE_BANDWIDTH_RESTRICTION
 *
 * 0x6F146BCF099DE910

 * 
 * Voice chat can be disabled in low bandwidth conditions - if voice chat is critical to gameplay, this needs to disabled/enabled
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function networkEnableVoiceBandwidthRestriction(player: PlayerIndex): void {
	const networkEnableVoiceBandwidthRestriction_result = Citizen.invokeNative<void>('0x6F146BCF099DE910', player);
	return networkEnableVoiceBandwidthRestriction_result;
}