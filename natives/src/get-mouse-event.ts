import { ScaleformIndex, IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_MOUSE_EVENT
 *
 * 0xEE00DCC111704F16

 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {IntRef} evtType [Ref]
 * @param {IntRef} uID [Ref]
 * @param {IntRef} context [Ref]
 * @returns {boolean}  
 */
export function getMouseEvent(scaleformMovieId: ScaleformIndex, evtType: IntRef /* ptr */, uID: IntRef /* ptr */, context: IntRef /* ptr */): boolean {
	const getMouseEvent_result = Citizen.invokeNative<boolean>('0xEE00DCC111704F16', scaleformMovieId, evtType.dataView, uID.dataView, context.dataView);
	return getMouseEvent_result;
}