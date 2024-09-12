/**
 * HUD:FORCE_CLOSE_REPORTUGC_MENU
 *
 * 0x335E0BA469D39899

 * 
 * ------------------------------------------------------------------
 */
export function forceCloseReportugcMenu(): void {
	const forceCloseReportugcMenu_result = Citizen.invokeNative<void>('0x335E0BA469D39899', );
	return forceCloseReportugcMenu_result;
}