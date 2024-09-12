import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:STOP_ROPE_WINDING
 *
 * 0x1A14B471E6F52A55

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 */
export function stopRopeWinding(ropeID: RopeIndex): void {
	const stopRopeWinding_result = Citizen.invokeNative<void>('0x1A14B471E6F52A55', ropeID);
	return stopRopeWinding_result;
}