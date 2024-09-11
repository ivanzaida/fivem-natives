/**
 * STATS:PLAYSTATS_AWARD_XP
 *
 * 0xF509A0F327DF0ADD

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} type
 * @param {number} category
 */
export function playstatsAwardXp(amount: number, type: number, category: number): void {
	const playstatsAwardXp_result = Citizen.invokeNative<void>('0xF509A0F327DF0ADD', amount, type, category);
	return playstatsAwardXp_result;
}