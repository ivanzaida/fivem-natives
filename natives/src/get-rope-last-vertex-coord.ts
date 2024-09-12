import { RopeIndex, Vector3 } from '@ivanzaida/structures'

/**
 * PHYSICS:GET_ROPE_LAST_VERTEX_COORD
 *
 * 0xCD3F86829B5968C9

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @returns {Vector3}  
 */
export function getRopeLastVertexCoord(ropeID: RopeIndex): Vector3 {
	const getRopeLastVertexCoord_result = Citizen.invokeNative<Vector3>('0xCD3F86829B5968C9', ropeID);
	return getRopeLastVertexCoord_result;
}