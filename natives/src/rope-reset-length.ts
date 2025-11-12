import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_RESET_LENGTH
 *
 * 0xECFFA90DECC6D406

 * 
 * Reset a rope to a certain length.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {boolean} isResetLength
 */
export function ropeResetLength(ropeID: RopeIndex, isResetLength: boolean): void {
	const ropeResetLength_result = Citizen.invokeNative<void>('0xECFFA90DECC6D406', ropeID, isResetLength);
	return ropeResetLength_result;
}