/**
 * GRAPHICS:FORCE_RENDER_IN_GAME_UI
 *
 * 0xE1DC9972544E4160

 * 
 * ------------------------------------------------------------------
 * @param {boolean} val
 */
export function forceRenderInGameUi(val: boolean): void {
	const forceRenderInGameUi_result = Citizen.invokeNative<void>('0xE1DC9972544E4160', val);
	return forceRenderInGameUi_result;
}