import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:LOAD_ROPE_DATA
 *
 * 0x4244303B05A2EF30

 * 
 * Rope presets can be found in the gamefiles. One example is "ropeFamily3", it is NOT a hash but rather a string.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {string} fileName
 */
export function loadRopeData(ropeID: RopeIndex, fileName: string): void {
	const loadRopeData_result = Citizen.invokeNative<void>('0x4244303B05A2EF30', ropeID, fileName);
	return loadRopeData_result;
}