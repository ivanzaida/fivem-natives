/**
 * MONEY:NETWORK_INITIALIZE_CASH
 *
 * 0x68E9DB185164504F

 * 
 * ------------------------------------------------------------------
 * @param {number} walletAmount
 * @param {number} bankAmount
 */
export function networkInitializeCash(walletAmount: number, bankAmount: number = 0): void {
	const networkInitializeCash_result = Citizen.invokeNative<void>('0x68E9DB185164504F', walletAmount, bankAmount);
	return networkInitializeCash_result;
}