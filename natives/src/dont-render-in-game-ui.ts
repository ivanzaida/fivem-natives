/**
 * GRAPHICS:DONT_RENDER_IN_GAME_UI
 *
 * 0xF5AB6155B7363507

 * 
 * ------------------------------------------------------------------
 * @param {boolean} val
 */
export function dontRenderInGameUi(val: boolean): void {
	const dontRenderInGameUi_result = Citizen.invokeNative<void>('0xF5AB6155B7363507', val);
	return dontRenderInGameUi_result;
}