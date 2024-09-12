import { IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_MENU_TRIGGER_EVENT_DETAILS
 *
 * 0xB6249BA74349F6AB

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} triggerId [Ref]
 * @param {IntRef} menu [Ref]
 */
export function getMenuTriggerEventDetails(triggerId: IntRef /* ptr */, menu: IntRef /* ptr */): void {
	const getMenuTriggerEventDetails_result = Citizen.invokeNative<void>('0xB6249BA74349F6AB', triggerId.dataView, menu.dataView);
	return getMenuTriggerEventDetails_result;
}