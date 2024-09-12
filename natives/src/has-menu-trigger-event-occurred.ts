/**
 * HUD:HAS_MENU_TRIGGER_EVENT_OCCURRED
 *
 * 0x6462E92135CA5CC1

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasMenuTriggerEventOccurred(): boolean {
	const hasMenuTriggerEventOccurred_result = Citizen.invokeNative<boolean>('0x6462E92135CA5CC1', );
	return hasMenuTriggerEventOccurred_result;
}