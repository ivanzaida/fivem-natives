/**
 * CFX:SET_NUI_FOCUS
 *
 * 0X5B98AE30

 * 
 * ------------------------------------------------------------------
 * @param {boolean} hasFocus
 * @param {boolean} hasCursor
 */
export function setNuiFocus(hasFocus: boolean, hasCursor: boolean): void {
	const setNuiFocus_result = Citizen.invokeNative<void>('0X5B98AE30', hasFocus, hasCursor);
	return setNuiFocus_result;
}