/**
 * MONEY:NETWORK_EARN_RC_TIME_TRIAL
 *
 * 0x110068A07EDA9FBC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnRcTimeTrial(amount: number): void {
	const networkEarnRcTimeTrial_result = Citizen.invokeNative<void>('0x110068A07EDA9FBC', amount);
	return networkEarnRcTimeTrial_result;
}