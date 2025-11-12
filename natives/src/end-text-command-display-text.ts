/**
 * HUD:END_TEXT_COMMAND_DISPLAY_TEXT
 *
 * 0x25DD447A6EB3A86F

 * 
 * After applying the properties to the text (See HUD::SET_TEXT_), this will draw the text in the applied position. Also 0.0f < x, y < 1.0f, percentage of the axis.
 * 
 * Used to be known as _DRAW_TEXT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} displayAtX
 * @param {number} displayAtY
 * @param {number} stereo
 */
export function endTextCommandDisplayText(displayAtX: number, displayAtY: number, stereo: number = 0): void {
	const endTextCommandDisplayText_result = Citizen.invokeNative<void>('0x25DD447A6EB3A86F', displayAtX, displayAtY, stereo);
	return endTextCommandDisplayText_result;
}