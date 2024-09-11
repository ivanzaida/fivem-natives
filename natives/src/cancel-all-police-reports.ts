/**
 * AUDIO:CANCEL_ALL_POLICE_REPORTS
 *
 * 0x19F3009F6A632270

 * 
 * ------------------------------------------------------------------
 */
export function cancelAllPoliceReports(): void {
	const cancelAllPoliceReports_result = Citizen.invokeNative<void>('0x19F3009F6A632270', );
	return cancelAllPoliceReports_result;
}