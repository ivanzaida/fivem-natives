/**
 * HUD:IS_REPORTUGC_MENU_OPEN
 *
 * 0xF69CA4DDEF6E2A55

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isReportugcMenuOpen(): boolean {
	const isReportugcMenuOpen_result = Citizen.invokeNative<boolean>('0xF69CA4DDEF6E2A55', );
	return isReportugcMenuOpen_result;
}