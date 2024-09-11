/**
 * MONEY:NETWORK_EARN_AWARD_FIXER_MISSION
 *
 * 0x583714F99BC53894

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnAwardFixerMission(amount: number, context: number): void {
	const networkEarnAwardFixerMission_result = Citizen.invokeNative<void>('0x583714F99BC53894', amount, context);
	return networkEarnAwardFixerMission_result;
}