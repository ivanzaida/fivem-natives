/**
 * GRAPHICS:CLEAR_DRAW_ORIGIN
 *
 * 0xCE3DA51E28972A56

 * 
 * Resets the screen's draw-origin which was changed by the function GRAPHICS::SET_DRAW_ORIGIN(...) back to x=0,y=0.
 * 
 * See GRAPHICS::SET_DRAW_ORIGIN(...) for further information.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearDrawOrigin(): void {
	const clearDrawOrigin_result = Citizen.invokeNative<void>('0xCE3DA51E28972A56', );
	return clearDrawOrigin_result;
}