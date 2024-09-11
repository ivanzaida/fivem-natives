/**
 * HUD:SET_MAX_HEALTH_HUD_DISPLAY
 *
 * 0x69EA52C44C3F78D9

 * 
 * ------------------------------------------------------------------
 * @param {number} maxDisplay
 */
export function setMaxHealthHudDisplay(maxDisplay: number): void {
	const setMaxHealthHudDisplay_result = Citizen.invokeNative<void>('0x69EA52C44C3F78D9', maxDisplay);
	return setMaxHealthHudDisplay_result;
}