/**
 * MONEY:NETWORK_EARN_FINALE
 *
 * 0x9E645A15DE54B5EE

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnFinale(amount: number, context: number): void {
	const networkEarnFinale_result = Citizen.invokeNative<void>('0x9E645A15DE54B5EE', amount, context);
	return networkEarnFinale_result;
}