/**
 * HUD:SET_TEXT_DROP_SHADOW
 *
 * 0x2B50C29142312934

 * 
 * ------------------------------------------------------------------
 */
export function setTextDropShadow(): void {
	const setTextDropShadow_result = Citizen.invokeNative<void>('0x2B50C29142312934', );
	return setTextDropShadow_result;
}