import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_SET_UPDATE_PINVERTS
 *
 * 0x7E27CBB7DF2BAE69

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 */
export function ropeSetUpdatePinverts(ropeID: RopeIndex): void {
	const ropeSetUpdatePinverts_result = Citizen.invokeNative<void>('0x7E27CBB7DF2BAE69', ropeID);
	return ropeSetUpdatePinverts_result;
}