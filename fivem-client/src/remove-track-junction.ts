/**
 * CFX:REMOVE_TRACK_JUNCTION
 *
 * 0x4F3D2B2A

 * Removes the specified track junction.
 * 
 * ------------------------------------------------------------------
 * @param {number} junctionIndex The junctions index
 * @returns {boolean}  Returns if it succeeds in removing a junction or not
 */
export function removeTrackJunction(junctionIndex: number): boolean {
	const removeTrackJunction_result = Citizen.invokeNative<boolean>('0x4F3D2B2A', junctionIndex);
	return removeTrackJunction_result;
}