import { Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:GET_TRACK_NODE_COORDS
 *
 * 0x1628548E

 * Gets the coordinates of a specific track node.
 * 
 * ------------------------------------------------------------------
 * @param {number} trackIndex The track index
 * @param {number} trackNode The track node
 * @param {Vector3Ref} coords The resulting track node coords [Ref]
 * @returns {boolean}  Returns if it succeeds in getting coords or not
 */
export function getTrackNodeCoords(trackIndex: number, trackNode: number, coords: Vector3Ref /* ptr */): boolean {
	const getTrackNodeCoords_result = Citizen.invokeNative<boolean>('0x1628548E', trackIndex, trackNode, coords.dataView);
	return getTrackNodeCoords_result;
}