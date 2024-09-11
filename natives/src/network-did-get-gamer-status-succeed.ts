/**
 * NETWORK:NETWORK_DID_GET_GAMER_STATUS_SUCCEED
 *
 * 0xC0AA79A8808D5BA2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkDidGetGamerStatusSucceed(): boolean {
	const networkDidGetGamerStatusSucceed_result = Citizen.invokeNative<boolean>('0xC0AA79A8808D5BA2', );
	return networkDidGetGamerStatusSucceed_result;
}