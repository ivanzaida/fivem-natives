/**
 * CFX:MUMBLE_SET_VOICE_CHANNEL
 *
 * 0x8737EEE8

 * 
 * ------------------------------------------------------------------
 * @param {number} channel A game voice channel ID.
 */
export function mumbleSetVoiceChannel(channel: number): void {
	const mumbleSetVoiceChannel_result = Citizen.invokeNative<void>('0x8737EEE8', channel);
	return mumbleSetVoiceChannel_result;
}