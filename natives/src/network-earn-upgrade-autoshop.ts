/**
 * MONEY:NETWORK_EARN_UPGRADE_AUTOSHOP
 *
 * 0x9FF64089E5DAC313

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} locationHash
 */
export function networkEarnUpgradeAutoshop(amount: number, locationHash: number): void {
	const networkEarnUpgradeAutoshop_result = Citizen.invokeNative<void>('0x9FF64089E5DAC313', amount, locationHash);
	return networkEarnUpgradeAutoshop_result;
}