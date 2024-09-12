/**
 * HUD:IS_HUD_HIDDEN
 *
 * 0xC5D15A335232A15D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isHudHidden(): boolean {
	const isHudHidden_result = Citizen.invokeNative<boolean>('0xC5D15A335232A15D', );
	return isHudHidden_result;
}