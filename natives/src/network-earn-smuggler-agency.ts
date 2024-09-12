/**
 * MONEY:NETWORK_EARN_SMUGGLER_AGENCY
 *
 * 0xE1037BCF8C2FC81D

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} amount
 * @param {boolean} notInAGang
 */
export function networkEarnSmugglerAgency(bossId1: number, bossId2: number, amount: number, notInAGang: boolean): void {
	const networkEarnSmugglerAgency_result = Citizen.invokeNative<void>('0xE1037BCF8C2FC81D', bossId1, bossId2, amount, notInAGang);
	return networkEarnSmugglerAgency_result;
}