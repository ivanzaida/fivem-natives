/**
 * MONEY:NETWORK_EARN_NIGHTCLUB_DANCING
 *
 * 0x6720272CB53DBA48

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnNightclubDancing(amount: number): void {
	const networkEarnNightclubDancing_result = Citizen.invokeNative<void>('0x6720272CB53DBA48', amount);
	return networkEarnNightclubDancing_result;
}