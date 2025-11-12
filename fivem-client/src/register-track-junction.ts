/**
 * CFX:REGISTER_TRACK_JUNCTION
 *
 * 0x35F743B5

 * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
 * 
 * ------------------------------------------------------------------
 * @param {number} trackIndex The track index a train should be on
 * @param {number} trackNode The node a train should be on
 * @param {number} newIndex The new track index for a train to be placed on
 * @param {number} newNode The new track node for a train to be placed on
 * @param {boolean} direction The direction a train should be traveling for this junction
 * @returns {number}  The track junction's handle or -1 if invalid.
 */
export function registerTrackJunction(trackIndex: number, trackNode: number, newIndex: number, newNode: number, direction: boolean): number {
	const registerTrackJunction_result = Citizen.invokeNative<number>('0x35F743B5', trackIndex, trackNode, newIndex, newNode, direction);
	return registerTrackJunction_result;
}