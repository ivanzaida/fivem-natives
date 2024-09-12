/**
 * MONEY:NETWORK_CASINO_CAN_BET_PVC
 *
 * 0xC585DDBDB453BF48

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCasinoCanBetPvc(): boolean {
	const networkCasinoCanBetPvc_result = Citizen.invokeNative<boolean>('0xC585DDBDB453BF48', );
	return networkCasinoCanBetPvc_result;
}