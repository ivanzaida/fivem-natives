import { EPresence } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_RICH_PRESENCE_STRING
 *
 * 0x5F974E79EAE32BE7

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPresence} id
 * @param {string} presence
 */
export function networkSetRichPresenceString(id: EPresence | number, presence: string): void {
	const networkSetRichPresenceString_result = Citizen.invokeNative<void>('0x5F974E79EAE32BE7', id, presence);
	return networkSetRichPresenceString_result;
}