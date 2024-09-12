/**
 * MONEY:NETWORK_CASINO_CAN_BUY_CHIPS_PVC
 *
 * 0xDA91B00799F1223C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCasinoCanBuyChipsPvc(): boolean {
	const networkCasinoCanBuyChipsPvc_result = Citizen.invokeNative<boolean>('0xDA91B00799F1223C', );
	return networkCasinoCanBuyChipsPvc_result;
}