/**
 * MONEY:NETWORK_EARN_FROM_DESTROYING_CONTRABAND
 *
 * 0x95508E1DCDC31638

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromDestroyingContraband(amount: number): void {
	const networkEarnFromDestroyingContraband_result = Citizen.invokeNative<void>('0x95508E1DCDC31638', amount);
	return networkEarnFromDestroyingContraband_result;
}