import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:UNPIN_ROPE_VERTEX
 *
 * 0x32E7B8CFE85DB282

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {number} vtx
 */
export function unpinRopeVertex(ropeID: RopeIndex, vtx: number): void {
	const unpinRopeVertex_result = Citizen.invokeNative<void>('0x32E7B8CFE85DB282', ropeID, vtx);
	return unpinRopeVertex_result;
}