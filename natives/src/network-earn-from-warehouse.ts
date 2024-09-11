/**
 * MONEY:NETWORK_EARN_FROM_WAREHOUSE
 *
 * 0xBA39DBB52E8B4335

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} namehash
 */
export function networkEarnFromWarehouse(amount: number, namehash: number): void {
	const networkEarnFromWarehouse_result = Citizen.invokeNative<void>('0xBA39DBB52E8B4335', amount, namehash);
	return networkEarnFromWarehouse_result;
}