import { Vector3Ref, TrackNode } from '@ivanzaida/structures'

/**
 * CFX:GET_CLOSEST_TRACK_NODES
 *
 * 0x59FC24A7

 * Get all track nodes and their track ids within the radius of the specified coordinates.
 * 
 * ------------------------------------------------------------------
 * @param {Vector3Ref} position Get track nodes at position
 * @param {number} radius Get track nodes within radius
 * @returns {TrackNode}  Returns a list of tracks and node entries: a trackNode and a trackId

The data returned adheres to the following layout:
```
[{trackNode1, trackId1}, ..., {trackNodeN, trackIdN}]
```
 */
export function getClosestTrackNodes(position: Vector3Ref, radius: number): TrackNode[] {
	const getClosestTrackNodes_result = Citizen.invokeNative<TrackNode[]>('0x59FC24A7', position, radius, Citizen.resultAsObject());
	return getClosestTrackNodes_result;
}