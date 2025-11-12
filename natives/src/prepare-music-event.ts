/**
 * AUDIO:PREPARE_MUSIC_EVENT
 *
 * 0x16088CC55E7F218A

 * 
 * Prepares the specified music event. Preparing it in advance will preload any required data so that
 * it's ready to play immediately.
 * 
 * All music event names found in the b617d scripts: https://pastebin.com/GnYt0R3P
 * Full list of music event names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/musicEventNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName
 * @returns {boolean}  
 */
export function prepareMusicEvent(eventName: string): boolean {
	const prepareMusicEvent_result = Citizen.invokeNative<boolean>('0x16088CC55E7F218A', eventName);
	return prepareMusicEvent_result;
}