/**
 * HUD:SET_SCRIPT_VARIABLE_HUD_COLOUR
 *
 * 0xDBEFC24929CE2C54

 * 
 * The first script variable colour is marked with a ~v~ in the text. Call this command to set the RGBA value of that colour.
 * Your setting will stay in effect until the next call to this command
 * 
 * Sets the color of HUD_COLOUR_SCRIPT_VARIABLE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function setScriptVariableHudColour(red: number, green: number, blue: number, alpha: number): void {
	const setScriptVariableHudColour_result = Citizen.invokeNative<void>('0xDBEFC24929CE2C54', red, green, blue, alpha);
	return setScriptVariableHudColour_result;
}