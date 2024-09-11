import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:GET_ROPE_VERTEX_COUNT
 *
 * 0x29D9CA677F5D2A36

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @returns {number}  
 */
export function getRopeVertexCount(ropeID: RopeIndex): number {
	const getRopeVertexCount_result = Citizen.invokeNative<number>('0x29D9CA677F5D2A36', ropeID);
	return getRopeVertexCount_result;
}