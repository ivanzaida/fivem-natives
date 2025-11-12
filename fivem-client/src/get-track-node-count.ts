/**
 * CFX:GET_TRACK_NODE_COUNT
 *
 * 0x896A0C11

 * Gets the specified tracks node count.
 * 
 * ------------------------------------------------------------------
 * @param {number} trackIndex The track index
 * @returns {number}  The amount of track nodes on the specified track
 */
export function getTrackNodeCount(trackIndex: number): number {
	const getTrackNodeCount_result = Citizen.invokeNative<number>('0x896A0C11', trackIndex);
	return getTrackNodeCount_result;
}