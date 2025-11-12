/**
 * AUDIO:DEACTIVATE_AUDIO_SLOWMO_MODE
 *
 * 0x5FFA5801E4084FC5

 * 
 * see ACTIVATE_AUDIO_SLOWMO_MODE for modes
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mode
 */
export function deactivateAudioSlowmoMode(mode: string): void {
	const deactivateAudioSlowmoMode_result = Citizen.invokeNative<void>('0x5FFA5801E4084FC5', mode);
	return deactivateAudioSlowmoMode_result;
}