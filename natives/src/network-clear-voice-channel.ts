/**
 * NETWORK:NETWORK_CLEAR_VOICE_CHANNEL
 *
 * 0x12761B3B63D726C3

 * 
 * ------------------------------------------------------------------
 */
export function networkClearVoiceChannel(): void {
	const networkClearVoiceChannel_result = Citizen.invokeNative<void>('0x12761B3B63D726C3', );
	return networkClearVoiceChannel_result;
}