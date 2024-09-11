/**
 * STATS:END_BEING_GOON
 *
 * 0x548C5E01E1FF757E

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} endingReason
 * @param {number} rpBonus
 * @param {number} time
 */
export function endBeingGoon(bossId1: number, bossId2: number, endingReason: number, rpBonus: number, time: number = 0): void {
	const endBeingGoon_result = Citizen.invokeNative<void>('0x548C5E01E1FF757E', bossId1, bossId2, endingReason, rpBonus, time);
	return endBeingGoon_result;
}