/**
 * HUD:CLEAR_HELP
 *
 * 0x428C32CC68809A35

 * 
 * ------------------------------------------------------------------
 * @param {boolean} clearNow TRUE to clear help straight away (default), false to let it fade out
 */
export function clearHelp(clearNow: boolean = true): void {
	const clearHelp_result = Citizen.invokeNative<void>('0x428C32CC68809A35', clearNow);
	return clearHelp_result;
}