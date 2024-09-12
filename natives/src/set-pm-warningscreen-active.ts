/**
 * HUD:SET_PM_WARNINGSCREEN_ACTIVE
 *
 * 0x69E8B9365B1026DD

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setPmWarningscreenActive(active: boolean): void {
	const setPmWarningscreenActive_result = Citizen.invokeNative<void>('0x69E8B9365B1026DD', active);
	return setPmWarningscreenActive_result;
}