import { IntRef } from '@ivanzaida/structures'

/**
 * HUD:PAUSE_MENU_GET_MOUSE_CLICK_EVENT
 *
 * 0x7BB49823B96323C4

 * 
 * Returns whether there has been a mouse click event
 * If this returns TRUE, writes the mouse event data to the arguments index, menuID, and uniqueID
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} index [Ref]
 * @param {IntRef} menuID [Ref]
 * @param {IntRef} uniqueID [Ref]
 * @returns {boolean}  
 */
export function pauseMenuGetMouseClickEvent(index: IntRef /* ptr */, menuID: IntRef /* ptr */, uniqueID: IntRef /* ptr */): boolean {
	const pauseMenuGetMouseClickEvent_result = Citizen.invokeNative<boolean>('0x7BB49823B96323C4', index.dataView, menuID.dataView, uniqueID.dataView);
	return pauseMenuGetMouseClickEvent_result;
}