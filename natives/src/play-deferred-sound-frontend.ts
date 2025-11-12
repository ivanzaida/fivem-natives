/**
 * AUDIO:PLAY_DEFERRED_SOUND_FRONTEND
 *
 * 0xD35776C4668F2E8D

 * 
 * Only call found in the b617d scripts:
 * 
 * AUDIO::PLAY_DEFERRED_SOUND_FRONTEND("BACK", "HUD_FREEMODE_SOUNDSET");
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} soundName
 * @param {string} setName
 */
export function playDeferredSoundFrontend(soundName: string, setName: string = null!): void {
	const playDeferredSoundFrontend_result = Citizen.invokeNative<void>('0xD35776C4668F2E8D', soundName, setName);
	return playDeferredSoundFrontend_result;
}