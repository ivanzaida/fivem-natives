/**
 * SCRIPT:SET_NO_LOADING_SCREEN
 *
 * 0x6FF322107B12B749

 * 
 * ------------------------------------------------------------------
 * @param {boolean} state
 */
export function setNoLoadingScreen(state: boolean): void {
	const setNoLoadingScreen_result = Citizen.invokeNative<void>('0x6FF322107B12B749', state);
	return setNoLoadingScreen_result;
}