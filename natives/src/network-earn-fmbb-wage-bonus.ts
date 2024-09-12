/**
 * MONEY:NETWORK_EARN_FMBB_WAGE_BONUS
 *
 * 0x69071D15F1FDD00C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFmbbWageBonus(amount: number): void {
	const networkEarnFmbbWageBonus_result = Citizen.invokeNative<void>('0x69071D15F1FDD00C', amount);
	return networkEarnFmbbWageBonus_result;
}