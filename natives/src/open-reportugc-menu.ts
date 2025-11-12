/**
 * HUD:OPEN_REPORTUGC_MENU
 *
 * 0x3D88441D252699DF

 * 
 * Shows a menu for reporting UGC content.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function openReportugcMenu(): void {
	const openReportugcMenu_result = Citizen.invokeNative<void>('0x3D88441D252699DF', );
	return openReportugcMenu_result;
}