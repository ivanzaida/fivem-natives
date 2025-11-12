/**
 * APP:APP_SET_APP
 *
 * 0x6E3671ABA19358C3

 * 
 * Called in the gamescripts like:
 * APP::APP_SET_APP("car");
 * APP::APP_SET_APP("dog");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} name
 */
export function appSetApp(name: string): void {
	const appSetApp_result = Citizen.invokeNative<void>('0x6E3671ABA19358C3', name);
	return appSetApp_result;
}