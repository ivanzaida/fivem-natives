/**
 * NETWORK:NETWORK_SESSION_VOICE_HOST
 *
 * 0xD9C7584E971C091E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionVoiceHost(): boolean {
	const networkSessionVoiceHost_result = Citizen.invokeNative<boolean>('0xD9C7584E971C091E', );
	return networkSessionVoiceHost_result;
}