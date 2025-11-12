/**
 * DLC:GET_IS_LOADING_SCREEN_ACTIVE
 *
 * 0xDCE42B3C644D1A4E

 * 
 * Returns true if the loading screens are active
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsLoadingScreenActive(): boolean {
	const getIsLoadingScreenActive_result = Citizen.invokeNative<boolean>('0xDCE42B3C644D1A4E', );
	return getIsLoadingScreenActive_result;
}