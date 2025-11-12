/**
 * AUDIO:TRIGGER_MUSIC_EVENT
 *
 * 0x86A2BC11844DEEB3

 * 
 * List of all usable event names found in b617d used with this native. Sorted alphabetically and identical names removed: https://pastebin.com/RzDFmB1W
 * 
 * All music event names found in the b617d scripts: https://pastebin.com/GnYt0R3P
 * Full list of music event names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/musicEventNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName
 * @returns {boolean}  
 */
export function triggerMusicEvent(eventName: string): boolean {
	const triggerMusicEvent_result = Citizen.invokeNative<boolean>('0x86A2BC11844DEEB3', eventName);
	return triggerMusicEvent_result;
}