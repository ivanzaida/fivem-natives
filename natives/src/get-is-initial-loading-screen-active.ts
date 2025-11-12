/**
 * DLC:GET_IS_INITIAL_LOADING_SCREEN_ACTIVE
 *
 * 0x55002CD5D725C226

 * 
 * Returns true if the initial loading screens are active (when you boot the game)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsInitialLoadingScreenActive(): boolean {
	const getIsInitialLoadingScreenActive_result = Citizen.invokeNative<boolean>('0x55002CD5D725C226', );
	return getIsInitialLoadingScreenActive_result;
}