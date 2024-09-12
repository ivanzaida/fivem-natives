/**
 * NETWORK:NETWORK_SESSION_IS_VOICE_SESSION_ACTIVE
 *
 * 0x810D839B3DC43B18

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsVoiceSessionActive(): boolean {
	const networkSessionIsVoiceSessionActive_result = Citizen.invokeNative<boolean>('0x810D839B3DC43B18', );
	return networkSessionIsVoiceSessionActive_result;
}