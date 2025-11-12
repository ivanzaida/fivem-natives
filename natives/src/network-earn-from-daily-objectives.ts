/**
 * MONEY:NETWORK_EARN_FROM_DAILY_OBJECTIVES
 *
 * 0xE36D9E1EDE0E76B4

 * 
 * type either Monthly,Weekly,Daily
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} description
 * @param {number} objective
 */
export function networkEarnFromDailyObjectives(amount: number, description: string, objective: number): void {
	const networkEarnFromDailyObjectives_result = Citizen.invokeNative<void>('0xE36D9E1EDE0E76B4', amount, description, objective);
	return networkEarnFromDailyObjectives_result;
}