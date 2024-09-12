/**
 * CFX:MUMBLE_SET_SUBMIX_FOR_SERVER_ID
 *
 * 0xFE3A3054

 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 * 
 * ------------------------------------------------------------------
 * @param {number} serverId The player's server ID.
 * @param {number} submixId The submix ID.
 */
export function mumbleSetSubmixForServerId(serverId: number, submixId: number): void {
	const mumbleSetSubmixForServerId_result = Citizen.invokeNative<void>('0xFE3A3054', serverId, submixId);
	return mumbleSetSubmixForServerId_result;
}