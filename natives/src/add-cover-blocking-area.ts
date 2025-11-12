/**
 * TASK:ADD_COVER_BLOCKING_AREA
 *
 * 0xCA32E959324DBA6C

 * 
 * if you want them to use scripted points added instead. You must call REMOVE_ALL_COVER_BLOCKING_AREAS at the end of the mission to remove them,
 * this command can only be used during mission scripts
 * MAX allowed areas is 16. Let code know if that needs increasing
 * 
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
export function addCoverBlockingArea(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, blockObjects: boolean, blockVehicles: boolean, blockMap: boolean, blockPlayer: boolean = false): void {
	const addCoverBlockingArea_result = Citizen.invokeNative<void>('0xCA32E959324DBA6C', startX, startY, startZ, endX, endY, endZ, blockObjects, blockVehicles, blockMap, blockPlayer);
	return addCoverBlockingArea_result;
}