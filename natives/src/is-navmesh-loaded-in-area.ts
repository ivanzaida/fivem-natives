/**
 * PATHFIND:IS_NAVMESH_LOADED_IN_AREA
 *
 * 0x75A7B7B3DF681621

 * 
 * Returns whether all navmeshes in the area vMin to vMax are loaded in memory
 * 
 * Returns whether navmesh for the region is loaded. The region is a rectangular prism defined by it's top left deepest corner to it's bottom right shallowest corner.
 * 
 * If you can re-word this so it makes more sense, please do. I'm horrible with words sometimes...
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 * @returns {boolean}  
 */
export function isNavmeshLoadedInArea(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean {
	const isNavmeshLoadedInArea_result = Citizen.invokeNative<boolean>('0x75A7B7B3DF681621', minX, minY, minZ, maxX, maxY, maxZ);
	return isNavmeshLoadedInArea_result;
}