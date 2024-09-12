/**
 * STREAMING:IS_NETWORK_LOADING_SCENE
 *
 * 0x9C71253F91C37F27

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isNetworkLoadingScene(): boolean {
	const isNetworkLoadingScene_result = Citizen.invokeNative<boolean>('0x9C71253F91C37F27', );
	return isNetworkLoadingScene_result;
}