/**
 * AUDIO:REGISTER_SCRIPT_WITH_AUDIO
 *
 * 0x8E1F26D6742EC167

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} inChargeOfAudio
 */
export function registerScriptWithAudio(inChargeOfAudio: boolean = false): void {
	const registerScriptWithAudio_result = Citizen.invokeNative<void>('0x8E1F26D6742EC167', inChargeOfAudio);
	return registerScriptWithAudio_result;
}