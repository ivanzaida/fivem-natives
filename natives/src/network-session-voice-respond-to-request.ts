/**
 * NETWORK:NETWORK_SESSION_VOICE_RESPOND_TO_REQUEST
 *
 * 0x04C07C028D5A3A1A

 * 
 * ------------------------------------------------------------------
 * @param {boolean} accept
 * @param {number} reponseCode
 */
export function networkSessionVoiceRespondToRequest(accept: boolean, reponseCode: number): void {
	const networkSessionVoiceRespondToRequest_result = Citizen.invokeNative<void>('0x04C07C028D5A3A1A', accept, reponseCode);
	return networkSessionVoiceRespondToRequest_result;
}