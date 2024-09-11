import { IntRef } from '@ivanzaida/structures'

/**
 * PHYSICS:DELETE_ROPE
 *
 * 0x51EC3CEC568ABB81

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} ropeID [Ref]
 */
export function deleteRope(ropeID: IntRef /* ptr */): void {
	const deleteRope_result = Citizen.invokeNative<void>('0x51EC3CEC568ABB81', ropeID.dataView);
	return deleteRope_result;
}