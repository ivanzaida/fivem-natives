/**
 * HUD:SET_TEXT_CENTRE
 *
 * 0xEAF65721ACB2FDFB

 * 
 * It also moves the origin of the text to the centre point.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} textCentreFlag
 */
export function setTextCentre(textCentreFlag: boolean): void {
	const setTextCentre_result = Citizen.invokeNative<void>('0xEAF65721ACB2FDFB', textCentreFlag);
	return setTextCentre_result;
}