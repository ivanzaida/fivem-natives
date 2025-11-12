import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_FORCE_LENGTH
 *
 * 0xB5186C080A343976

 * 
 * Forces a rope to a certain length.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {number} len
 */
export function ropeForceLength(ropeID: RopeIndex, len: number): void {
	const ropeForceLength_result = Citizen.invokeNative<void>('0xB5186C080A343976', ropeID, len);
	return ropeForceLength_result;
}