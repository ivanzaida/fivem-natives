/**
 * MONEY:NETWORK_EARN_UPGRADE_AGENCY
 *
 * 0x95F1CA5C2CE2942C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnUpgradeAgency(amount: number, context: number): void {
	const networkEarnUpgradeAgency_result = Citizen.invokeNative<void>('0x95F1CA5C2CE2942C', amount, context);
	return networkEarnUpgradeAgency_result;
}