/**
 * STATS:PLAYSTATS_COLLECTIBLE_PICKED_UP
 *
 * 0xF68338683C568951

 * 
 * ------------------------------------------------------------------
 * @param {number} collectionType
 * @param {number} pickedUp
 * @param {number} pickedSoFar
 * @param {number} total
 * @param {number} awardCash
 * @param {number} awardRP
 * @param {number} awardChips
 * @param {number} awardItems
 * @param {number} location
 * @param {number} animal
 * @param {number} awardMedal
 */
export function playstatsCollectiblePickedUp(collectionType: number, pickedUp: number, pickedSoFar: number, total: number, awardCash: number, awardRP: number, awardChips: number, awardItems: number, location: number, animal: number, awardMedal: number = 0): void {
	const playstatsCollectiblePickedUp_result = Citizen.invokeNative<void>('0xF68338683C568951', collectionType, pickedUp, pickedSoFar, total, awardCash, awardRP, awardChips, awardItems, location, animal, awardMedal);
	return playstatsCollectiblePickedUp_result;
}