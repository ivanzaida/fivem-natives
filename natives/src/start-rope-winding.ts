import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:START_ROPE_WINDING
 *
 * 0x2CFF537DCB91BDF5

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 */
export function startRopeWinding(ropeID: RopeIndex): void {
	const startRopeWinding_result = Citizen.invokeNative<void>('0x2CFF537DCB91BDF5', ropeID);
	return startRopeWinding_result;
}