/**
 * STATS:PLAYSTATS_AWARD_NAV
 *
 * 0xA6B31A9A2BC308B5

 * 
 * ------------------------------------------------------------------
 * @param {number} fixerView1
 * @param {number} fixerDone1
 */
export function playstatsAwardNav(fixerView1: number, fixerDone1: number): void {
	const playstatsAwardNav_result = Citizen.invokeNative<void>('0xA6B31A9A2BC308B5', fixerView1, fixerDone1);
	return playstatsAwardNav_result;
}