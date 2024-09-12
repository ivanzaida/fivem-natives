/**
 * MONEY:_NETWORK_SPEND_UPGRADE_ACID_LAB_ARMOR
 *
 * 0x3BE0A37C527AC2C8

 * 
 * ------------------------------------------------------------------
 * @param {number} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {number} p3
 */
export function networkSpendUpgradeAcidLabArmor(p0: number, p1: boolean, p2: boolean, p3: number): void {
	const networkSpendUpgradeAcidLabArmor_result = Citizen.invokeNative<void>('0x3BE0A37C527AC2C8', p0, p1, p2, p3);
	return networkSpendUpgradeAcidLabArmor_result;
}