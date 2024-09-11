/**
 * HUD:SET_TEXT_OUTLINE
 *
 * 0xF18BC069A9C882EC

 * 
 * ------------------------------------------------------------------
 */
export function setTextOutline(): void {
	const setTextOutline_result = Citizen.invokeNative<void>('0xF18BC069A9C882EC', );
	return setTextOutline_result;
}