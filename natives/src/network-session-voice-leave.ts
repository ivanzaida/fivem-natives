/**
 * NETWORK:NETWORK_SESSION_VOICE_LEAVE
 *
 * 0x7D8697356CC73FFD

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionVoiceLeave(): boolean {
	const networkSessionVoiceLeave_result = Citizen.invokeNative<boolean>('0x7D8697356CC73FFD', );
	return networkSessionVoiceLeave_result;
}