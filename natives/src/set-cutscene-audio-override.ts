/**
 * AUDIO:SET_CUTSCENE_AUDIO_OVERRIDE
 *
 * 0x91044D2095108F03

 * 
 * Add a suffix to the cutscene audio name. Call before loading the cutscene.
 * 
 * All occurrences found in b617d, sorted alphabetically and identical lines removed:
 * 
 * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_AK");
 * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_CUSTOM");
 * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_TOOTHLESS");
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} override
 */
export function setCutsceneAudioOverride(override: string): void {
	const setCutsceneAudioOverride_result = Citizen.invokeNative<void>('0x91044D2095108F03', override);
	return setCutsceneAudioOverride_result;
}