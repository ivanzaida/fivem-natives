import { ItemHashArray } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CRATE_DROP_MISSION_DONE
 *
 * 0x781030C356161426

 * 
 * ------------------------------------------------------------------
 * @param {number} ambientMissionId
 * @param {number} xpEarned
 * @param {number} cashEarned
 * @param {number} weaponHash
 * @param {number} otherItemsHash
 * @param {number} enemiesKilled
 * @param {ItemHashArray} specialItemHashs [Ref]
 * @param {boolean} collectedBodyArmour
 */
export function playstatsCrateDropMissionDone(ambientMissionId: number, xpEarned: number, cashEarned: number, weaponHash: number, otherItemsHash: number, enemiesKilled: number, specialItemHashs: ItemHashArray /* ptr */, collectedBodyArmour: boolean): void {
	const playstatsCrateDropMissionDone_result = Citizen.invokeNative<void>('0x781030C356161426', ambientMissionId, xpEarned, cashEarned, weaponHash, otherItemsHash, enemiesKilled, specialItemHashs.dataView, collectedBodyArmour);
	return playstatsCrateDropMissionDone_result;
}