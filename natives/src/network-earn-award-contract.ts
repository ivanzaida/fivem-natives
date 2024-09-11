/**
 * MONEY:NETWORK_EARN_AWARD_CONTRACT
 *
 * 0x50EE547EE5B116FA

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnAwardContract(amount: number, context: number): void {
	const networkEarnAwardContract_result = Citizen.invokeNative<void>('0x50EE547EE5B116FA', amount, context);
	return networkEarnAwardContract_result;
}