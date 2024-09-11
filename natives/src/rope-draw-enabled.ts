import { IntRef } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_DRAW_ENABLED
 *
 * 0x96205EB96C14F85F

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} ropeID [Ref]
 * @param {boolean} isDrawEnabled
 */
export function ropeDrawEnabled(ropeID: IntRef /* ptr */, isDrawEnabled: boolean): void {
	const ropeDrawEnabled_result = Citizen.invokeNative<void>('0x96205EB96C14F85F', ropeID.dataView, isDrawEnabled);
	return ropeDrawEnabled_result;
}