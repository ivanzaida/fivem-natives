/**
 * NETWORK:NETWORK_SESSION_VOICE_SET_TIMEOUT
 *
 * 0xBA4DB04D93B492EF

 * 
 * ------------------------------------------------------------------
 * @param {number} timeout
 */
export function networkSessionVoiceSetTimeout(timeout: number): void {
	const networkSessionVoiceSetTimeout_result = Citizen.invokeNative<void>('0xBA4DB04D93B492EF', timeout);
	return networkSessionVoiceSetTimeout_result;
}