/**
 * MONEY:NETWORK_EARN_DAILY_OBJECTIVE_EVENT
 *
 * 0x4FF0B515E4C83097

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnDailyObjectiveEvent(amount: number): void {
	const networkEarnDailyObjectiveEvent_result = Citizen.invokeNative<void>('0x4FF0B515E4C83097', amount);
	return networkEarnDailyObjectiveEvent_result;
}