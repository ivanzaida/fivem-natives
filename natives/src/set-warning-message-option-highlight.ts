/**
 * HUD:SET_WARNING_MESSAGE_OPTION_HIGHLIGHT
 *
 * 0x3E13E4D6100E6A83

 * 
 * ------------------------------------------------------------------
 * @param {number} highlight
 * @returns {boolean}  
 */
export function setWarningMessageOptionHighlight(highlight: number): boolean {
	const setWarningMessageOptionHighlight_result = Citizen.invokeNative<boolean>('0x3E13E4D6100E6A83', highlight);
	return setWarningMessageOptionHighlight_result;
}