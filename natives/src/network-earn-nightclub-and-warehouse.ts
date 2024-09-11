/**
 * MONEY:NETWORK_EARN_NIGHTCLUB_AND_WAREHOUSE
 *
 * 0x80B2A7374EC83539

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} location
 * @param {number} popularityEarnings
 * @param {number} mission
 * @param {number} rivalNcEarned
 * @param {number} sellContraband
 * @param {number} sellContrabandBonus
 */
export function networkEarnNightclubAndWarehouse(amount: number, location: number, popularityEarnings: number, mission: number, rivalNcEarned: number, sellContraband: number, sellContrabandBonus: number): void {
	const networkEarnNightclubAndWarehouse_result = Citizen.invokeNative<void>('0x80B2A7374EC83539', amount, location, popularityEarnings, mission, rivalNcEarned, sellContraband, sellContrabandBonus);
	return networkEarnNightclubAndWarehouse_result;
}