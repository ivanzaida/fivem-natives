/**
 * MONEY:NETWORK_EARN_FROM_CONTRABAND
 *
 * 0x183CC5B7D51F8C27

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} quantity
 */
export function networkEarnFromContraband(amount: number, quantity: number): void {
	const networkEarnFromContraband_result = Citizen.invokeNative<void>('0x183CC5B7D51F8C27', amount, quantity);
	return networkEarnFromContraband_result;
}