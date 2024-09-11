/**
 * CFX:MUMBLE_CLEAR_VOICE_CHANNEL
 *
 * 0XBF847807

 * 
 * ------------------------------------------------------------------
 */
export function mumbleClearVoiceChannel(): void {
	const mumbleClearVoiceChannel_result = Citizen.invokeNative<void>('0XBF847807', );
	return mumbleClearVoiceChannel_result;
}