/**
 * CFX:MUMBLE_REMOVE_VOICE_CHANNEL_LISTEN
 *
 * 0X231523B7

 * Stops listening to the specified channel.
 * 
 * ------------------------------------------------------------------
 * @param {number} channel A game voice channel ID.
 */
export function mumbleRemoveVoiceChannelListen(channel: number): void {
	const mumbleRemoveVoiceChannelListen_result = Citizen.invokeNative<void>('0X231523B7', channel);
	return mumbleRemoveVoiceChannelListen_result;
}