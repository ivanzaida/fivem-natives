/**
 * HUD:SET_TEXT_WRAP
 *
 * 0xE05EB1EAE7CCDC59

 * 
 * It sets the text in a specified box and wraps the text if it exceeds the boundries. Both values are for X axis. Useful when positioning text set to center or aligned to the right.
 * 
 * start - left boundry on screen position (0.0 - 1.0)
 * end - right boundry on screen position (0.0 - 1.0)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} textWrapStartX
 * @param {number} textWrapEndX
 */
export function setTextWrap(textWrapStartX: number, textWrapEndX: number): void {
	const setTextWrap_result = Citizen.invokeNative<void>('0xE05EB1EAE7CCDC59', textWrapStartX, textWrapEndX);
	return setTextWrap_result;
}