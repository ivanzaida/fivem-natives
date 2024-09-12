/**
 * CFX:MUMBLE_CREATE_CHANNEL
 *
 * 0x262663C5

 * Create a permanent voice channel.
 * 
 * ------------------------------------------------------------------
 * @param {number} id ID of the channel.
 */
export function mumbleCreateChannel(id: number): void {
	const mumbleCreateChannel_result = Citizen.invokeNative<void>('0x262663C5', id);
	return mumbleCreateChannel_result;
}