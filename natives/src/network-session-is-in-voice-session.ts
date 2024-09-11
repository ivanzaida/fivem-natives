/**
 * NETWORK:NETWORK_SESSION_IS_IN_VOICE_SESSION
 *
 * 0x5150DDF9D3BDA9E5

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsInVoiceSession(): boolean {
	const networkSessionIsInVoiceSession_result = Citizen.invokeNative<boolean>('0x5150DDF9D3BDA9E5', );
	return networkSessionIsInVoiceSession_result;
}