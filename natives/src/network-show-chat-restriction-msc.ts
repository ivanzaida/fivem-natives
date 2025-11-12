import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SHOW_CHAT_RESTRICTION_MSC
 *
 * 0x230CD2039E115591

 * 
 * Call to show system message about chat restriction.
 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} localGamer
 */
export function networkShowChatRestrictionMsc(localGamer: PlayerIndex): void {
	const networkShowChatRestrictionMsc_result = Citizen.invokeNative<void>('0x230CD2039E115591', localGamer);
	return networkShowChatRestrictionMsc_result;
}