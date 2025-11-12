/**
 * AUDIO:SET_RADIO_POSITION_AUDIO_MUTE
 *
 * 0x058438EA17EA0E85

 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} mute
 */
export function setRadioPositionAudioMute(mute: boolean): void {
	const setRadioPositionAudioMute_result = Citizen.invokeNative<void>('0x058438EA17EA0E85', mute);
	return setRadioPositionAudioMute_result;
}