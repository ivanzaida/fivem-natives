import { IntRef } from '@ivanzaida/structures'

/**
 * PHYSICS:IS_ROPE_ATTACHED_AT_BOTH_ENDS
 *
 * 0xB9DDE5F54A275DFF

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} ropeID [Ref]
 * @returns {boolean}  
 */
export function isRopeAttachedAtBothEnds(ropeID: IntRef /* ptr */): boolean {
	const isRopeAttachedAtBothEnds_result = Citizen.invokeNative<boolean>('0xB9DDE5F54A275DFF', ropeID.dataView);
	return isRopeAttachedAtBothEnds_result;
}