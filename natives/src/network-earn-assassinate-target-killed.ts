/**
 * MONEY:NETWORK_EARN_ASSASSINATE_TARGET_KILLED
 *
 * 0xEEE7837FC8CEDEDF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnAssassinateTargetKilled(amount: number): void {
	const networkEarnAssassinateTargetKilled_result = Citizen.invokeNative<void>('0xEEE7837FC8CEDEDF', amount);
	return networkEarnAssassinateTargetKilled_result;
}