/**
 * CFX:MUMBLE_SET_VOICE_CHANNEL
 *
 * 0X8737EEE8

 * 
 * ------------------------------------------------------------------
 * @param {number} channel A game voice channel ID.
 */
export function mumbleSetVoiceChannel(channel: number): void {
	const mumbleSetVoiceChannel_result = Citizen.invokeNative<void>('0X8737EEE8', channel);
	return mumbleSetVoiceChannel_result;
}