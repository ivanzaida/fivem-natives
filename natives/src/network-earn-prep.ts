/**
 * MONEY:NETWORK_EARN_PREP
 *
 * 0x4B9D927C4A4FB9DC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnPrep(amount: number, context: number): void {
	const networkEarnPrep_result = Citizen.invokeNative<void>('0x4B9D927C4A4FB9DC', amount, context);
	return networkEarnPrep_result;
}