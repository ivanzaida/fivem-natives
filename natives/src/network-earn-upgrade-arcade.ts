/**
 * MONEY:NETWORK_EARN_UPGRADE_ARCADE
 *
 * 0xAA8EDC61C1A66D69

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} location
 * @param {number} locationAmount
 */
export function networkEarnUpgradeArcade(amount: number, location: number, locationAmount: number): void {
	const networkEarnUpgradeArcade_result = Citizen.invokeNative<void>('0xAA8EDC61C1A66D69', amount, location, locationAmount);
	return networkEarnUpgradeArcade_result;
}