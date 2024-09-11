import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_SET_SMOOTH_REELIN
 *
 * 0x39073821D1E47645

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {boolean} smoothReelIn
 */
export function ropeSetSmoothReelin(ropeID: RopeIndex, smoothReelIn: boolean): void {
	const ropeSetSmoothReelin_result = Citizen.invokeNative<void>('0x39073821D1E47645', ropeID, smoothReelIn);
	return ropeSetSmoothReelin_result;
}