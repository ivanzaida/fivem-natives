/**
 * NETWORK:NETWORK_SET_VOICE_ACTIVE
 *
 * 0x4314716E4B544721

 * 
 * Enables / disables voice
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isVoiceActive
 */
export function networkSetVoiceActive(isVoiceActive: boolean): void {
	const networkSetVoiceActive_result = Citizen.invokeNative<void>('0x4314716E4B544721', isVoiceActive);
	return networkSetVoiceActive_result;
}