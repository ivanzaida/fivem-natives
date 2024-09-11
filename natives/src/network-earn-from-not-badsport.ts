/**
 * MONEY:NETWORK_EARN_FROM_NOT_BADSPORT
 *
 * 0x190378368BE7EFF3

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromNotBadsport(amount: number): void {
	const networkEarnFromNotBadsport_result = Citizen.invokeNative<void>('0x190378368BE7EFF3', amount);
	return networkEarnFromNotBadsport_result;
}