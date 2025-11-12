/**
 * HUD:SET_TEXT_RIGHT_JUSTIFY
 *
 * 0x16EC7160BEBE7A6F

 * 
 * It also moves the origin of the text to the right hand side of the text.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} textRightJustifyFlag
 */
export function setTextRightJustify(textRightJustifyFlag: boolean): void {
	const setTextRightJustify_result = Citizen.invokeNative<void>('0x16EC7160BEBE7A6F', textRightJustifyFlag);
	return setTextRightJustify_result;
}