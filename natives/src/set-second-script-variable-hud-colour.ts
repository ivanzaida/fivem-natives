/**
 * HUD:SET_SECOND_SCRIPT_VARIABLE_HUD_COLOUR
 *
 * 0x7E94C30FC8631308

 * 
 * The second script variable colour is marked with a ~u~ in the text. Call this command to set the RGBA value of that colour.
 * Your setting will stay in effect until the next call to this command
 * 
 * Sets the color of HUD_COLOUR_SCRIPT_VARIABLE_2
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function setSecondScriptVariableHudColour(red: number, green: number, blue: number, alpha: number): void {
	const setSecondScriptVariableHudColour_result = Citizen.invokeNative<void>('0x7E94C30FC8631308', red, green, blue, alpha);
	return setSecondScriptVariableHudColour_result;
}