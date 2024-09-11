/**
 * APP:APP_SAVE_DATA
 *
 * 0x16AA4E3C2A093DD0

 * 
 * ------------------------------------------------------------------
 */
export function appSaveData(): void {
	const appSaveData_result = Citizen.invokeNative<void>('0x16AA4E3C2A093DD0', );
	return appSaveData_result;
}