/**
 * MONEY:_NETWORK_SPEND_UPGRADE_ACID_LAB_SCOOP
 *
 * 0x6948702511126852

 * 
 * ------------------------------------------------------------------
 * @param {number} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {number} p3
 */
export function networkSpendUpgradeAcidLabScoop(p0: number, p1: boolean, p2: boolean, p3: number): void {
	const networkSpendUpgradeAcidLabScoop_result = Citizen.invokeNative<void>('0x6948702511126852', p0, p1, p2, p3);
	return networkSpendUpgradeAcidLabScoop_result;
}