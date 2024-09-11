/**
 * CFX:MUMBLE_ADD_VOICE_CHANNEL_LISTEN
 *
 * 0XC79F44BF

 * Starts listening to the specified channel, when available.
 * 
 * ------------------------------------------------------------------
 * @param {number} channel A game voice channel ID.
 */
export function mumbleAddVoiceChannelListen(channel: number): void {
	const mumbleAddVoiceChannelListen_result = Citizen.invokeNative<void>('0XC79F44BF', channel);
	return mumbleAddVoiceChannelListen_result;
}