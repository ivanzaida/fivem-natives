/**
 * NETWORK:NETWORK_SET_VOICE_CHANNEL
 *
 * 0xD80197DCA1803BB2

 * 
 * ------------------------------------------------------------------
 * @param {number} voiceChannel
 */
export function networkSetVoiceChannel(voiceChannel: number): void {
	const networkSetVoiceChannel_result = Citizen.invokeNative<void>('0xD80197DCA1803BB2', voiceChannel);
	return networkSetVoiceChannel_result;
}