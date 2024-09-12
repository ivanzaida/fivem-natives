/**
 * SCRIPT:GET_NO_LOADING_SCREEN
 *
 * 0x828F3FAE99DA791A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getNoLoadingScreen(): boolean {
	const getNoLoadingScreen_result = Citizen.invokeNative<boolean>('0x828F3FAE99DA791A', );
	return getNoLoadingScreen_result;
}