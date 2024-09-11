/**
 * MONEY:_NETWORK_SPEND_UPGRADE_ACID_LAB_MINES
 *
 * 0xCC69EE39119A150C

 * 
 * ------------------------------------------------------------------
 * @param {number} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {number} p3
 */
export function networkSpendUpgradeAcidLabMines(p0: number, p1: boolean, p2: boolean, p3: number): void {
	const networkSpendUpgradeAcidLabMines_result = Citizen.invokeNative<void>('0xCC69EE39119A150C', p0, p1, p2, p3);
	return networkSpendUpgradeAcidLabMines_result;
}