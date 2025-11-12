/**
 * HUD:DISPLAY_HELP_TEXT_THIS_FRAME
 *
 * 0x2B742757DC68DB01

 * 
 * Must be called every frame
 * 
 * The messages are localized strings.
 * Examples:
 * "No_bus_money"
 * "Enter_bus"
 * "Tour_help"
 * "LETTERS_HELP2"
 * "Dummy"
 * 
 * The bool appears to always be false (if it even is a bool, as it's represented by a zero)
 * --------
 * p1 doesn't seem to make a difference, regardless of the state it's in.
 * 
 * 
 * picture of where on the screen this is displayed?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textLabel
 * @param {boolean} curvedWindow
 */
export function displayHelpTextThisFrame(textLabel: string, curvedWindow: boolean): void {
	const displayHelpTextThisFrame_result = Citizen.invokeNative<void>('0x2B742757DC68DB01', textLabel, curvedWindow);
	return displayHelpTextThisFrame_result;
}