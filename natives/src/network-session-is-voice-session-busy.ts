/**
 * NETWORK:NETWORK_SESSION_IS_VOICE_SESSION_BUSY
 *
 * 0x8BDB5F6FED3994AD

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsVoiceSessionBusy(): boolean {
	const networkSessionIsVoiceSessionBusy_result = Citizen.invokeNative<boolean>('0x8BDB5F6FED3994AD', );
	return networkSessionIsVoiceSessionBusy_result;
}