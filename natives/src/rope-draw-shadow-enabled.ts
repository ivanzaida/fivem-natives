import { IntRef } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_DRAW_SHADOW_ENABLED
 *
 * 0x673A321A632EAD3B

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} ropeID [Ref]
 * @param {boolean} isDrawEnabled
 */
export function ropeDrawShadowEnabled(ropeID: IntRef /* ptr */, isDrawEnabled: boolean): void {
	const ropeDrawShadowEnabled_result = Citizen.invokeNative<void>('0x673A321A632EAD3B', ropeID.dataView, isDrawEnabled);
	return ropeDrawShadowEnabled_result;
}