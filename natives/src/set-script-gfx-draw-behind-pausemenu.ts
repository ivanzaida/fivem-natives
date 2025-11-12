/**
 * GRAPHICS:SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU
 *
 * 0xA66AC5949E305457

 * 
 * Sets a flag defining whether or not script draw commands should continue being drawn behind the pause menu. This is usually used for TV channels and other draw commands that are used with a world render target.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function setScriptGfxDrawBehindPausemenu(value: boolean): void {
	const setScriptGfxDrawBehindPausemenu_result = Citizen.invokeNative<void>('0xA66AC5949E305457', value);
	return setScriptGfxDrawBehindPausemenu_result;
}