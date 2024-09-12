/**
 * STATS:PLAYSTATS_SPIN_WHEEL
 *
 * 0xEFB96B0F8AFC55E7

 * 
 * ------------------------------------------------------------------
 * @param {number} contentId
 * @param {number} spintType
 * @param {number} rewardType
 * @param {number} rewardItem
 */
export function playstatsSpinWheel(contentId: number, spintType: number, rewardType: number, rewardItem: number): void {
	const playstatsSpinWheel_result = Citizen.invokeNative<void>('0xEFB96B0F8AFC55E7', contentId, spintType, rewardType, rewardItem);
	return playstatsSpinWheel_result;
}