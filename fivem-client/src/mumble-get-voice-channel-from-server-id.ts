/**
 * CFX:MUMBLE_GET_VOICE_CHANNEL_FROM_SERVER_ID
 *
 * 0X221C09F1

 * Returns the mumble voice channel from a player's server id.
 * 
 * ------------------------------------------------------------------
 * @param {number} serverId The player's server id.
 * @returns {number}  Int representing the identifier of the voice channel.
 */
export function mumbleGetVoiceChannelFromServerId(serverId: number): number {
	const mumbleGetVoiceChannelFromServerId_result = Citizen.invokeNative<number>('0X221C09F1', serverId);
	return mumbleGetVoiceChannelFromServerId_result;
}