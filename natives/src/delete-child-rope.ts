import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:DELETE_CHILD_ROPE
 *
 * 0x6FC03AECD995B8CC

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 */
export function deleteChildRope(ropeID: RopeIndex): void {
	const deleteChildRope_result = Citizen.invokeNative<void>('0x6FC03AECD995B8CC', ropeID);
	return deleteChildRope_result;
}