import { RopeIndex, Vector3 } from '@ivanzaida/structures'

/**
 * PHYSICS:GET_ROPE_VERTEX_COORD
 *
 * 0x7AACE64DEE426629

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {number} vtx
 * @returns {Vector3}  
 */
export function getRopeVertexCoord(ropeID: RopeIndex, vtx: number): Vector3 {
	const getRopeVertexCoord_result = Citizen.invokeNative<Vector3>('0x7AACE64DEE426629', ropeID, vtx);
	return getRopeVertexCoord_result;
}