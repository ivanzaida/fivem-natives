/**
 * CFX:MUMBLE_DOES_CHANNEL_EXIST
 *
 * 0XCC8CA25

 * Check whether specified channel exists on the Mumble server.
 * 
 * ------------------------------------------------------------------
 * @param {number} channel A game voice channel ID.
 * @returns {boolean}  True if the specific channel exists. False otherwise.
 */
export function mumbleDoesChannelExist(channel: number): boolean {
	const mumbleDoesChannelExist_result = Citizen.invokeNative<boolean>('0XCC8CA25', channel);
	return mumbleDoesChannelExist_result;
}