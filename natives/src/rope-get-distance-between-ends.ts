import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_GET_DISTANCE_BETWEEN_ENDS
 *
 * 0x6D4D0805396CE83B

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @returns {number}  
 */
export function ropeGetDistanceBetweenEnds(ropeID: RopeIndex): number {
	const ropeGetDistanceBetweenEnds_result = Citizen.invokeNative<number>('0x6D4D0805396CE83B', ropeID);
	return ropeGetDistanceBetweenEnds_result;
}