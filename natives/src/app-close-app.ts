/**
 * APP:APP_CLOSE_APP
 *
 * 0x2A160FB19DDAA9B3

 * 
 * ------------------------------------------------------------------
 */
export function appCloseApp(): void {
	const appCloseApp_result = Citizen.invokeNative<void>('0x2A160FB19DDAA9B3', );
	return appCloseApp_result;
}