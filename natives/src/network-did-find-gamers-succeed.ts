/**
 * NETWORK:NETWORK_DID_FIND_GAMERS_SUCCEED
 *
 * 0x6612FC080482B408

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkDidFindGamersSucceed(): boolean {
	const networkDidFindGamersSucceed_result = Citizen.invokeNative<boolean>('0x6612FC080482B408', );
	return networkDidFindGamersSucceed_result;
}