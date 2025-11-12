/**
 * AUDIO:CANCEL_MUSIC_EVENT
 *
 * 0x2C7FEB8222C29D99

 * 
 * All music event names found in the b617d scripts: https://pastebin.com/GnYt0R3P
 * Full list of music event names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/musicEventNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName
 * @returns {boolean}  
 */
export function cancelMusicEvent(eventName: string): boolean {
	const cancelMusicEvent_result = Citizen.invokeNative<boolean>('0x2C7FEB8222C29D99', eventName);
	return cancelMusicEvent_result;
}