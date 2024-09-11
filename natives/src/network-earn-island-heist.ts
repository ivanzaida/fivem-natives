/**
 * MONEY:NETWORK_EARN_ISLAND_HEIST
 *
 * 0xB413CA811F506DCF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} finale
 * @param {number} award
 * @param {number} awardName
 * @param {number} prep
 * @param {number} prepName
 */
export function networkEarnIslandHeist(amount: number, finale: number, award: number, awardName: number, prep: number, prepName: number): void {
	const networkEarnIslandHeist_result = Citizen.invokeNative<void>('0xB413CA811F506DCF', amount, finale, award, awardName, prep, prepName);
	return networkEarnIslandHeist_result;
}