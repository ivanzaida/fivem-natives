/**
 * TASK:REMOVE_SPECIFIC_COVER_BLOCKING_AREAS
 *
 * 0x1323CB5E215AACEC

 * 
 * ------------------------------------------------------------------
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} endX
 * @param {number} endY
 * @param {number} endZ
 * @param {boolean} blockObjects
 * @param {boolean} blockVehicles
 * @param {boolean} blockMap
 * @param {boolean} blockPlayer
 */
export function removeSpecificCoverBlockingAreas(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, blockObjects: boolean, blockVehicles: boolean, blockMap: boolean, blockPlayer: boolean = false): void {
	const removeSpecificCoverBlockingAreas_result = Citizen.invokeNative<void>('0x1323CB5E215AACEC', startX, startY, startZ, endX, endY, endZ, blockObjects, blockVehicles, blockMap, blockPlayer);
	return removeSpecificCoverBlockingAreas_result;
}