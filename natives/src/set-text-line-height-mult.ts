/**
 * HUD:SET_TEXT_LINE_HEIGHT_MULT
 *
 * 0x9F4624F76E6953D1

 * 
 * ------------------------------------------------------------------
 */
export function setTextLineHeightMult(): void {
	const setTextLineHeightMult_result = Citizen.invokeNative<void>('0x9F4624F76E6953D1', );
	return setTextLineHeightMult_result;
}