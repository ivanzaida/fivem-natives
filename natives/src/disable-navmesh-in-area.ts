/**
 * PATHFIND:DISABLE_NAVMESH_IN_AREA
 *
 * 0xA8C09F16998DFD28

 * 
 * When a navmesh area is disabled, no navigation will occur through this area - peds will walk around
 * 
 * Set toggle true to disable navmesh.
 * Set toggle false to enable navmesh.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {boolean} disable
 */
export function disableNavmeshInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, disable: boolean): void {
	const disableNavmeshInArea_result = Citizen.invokeNative<void>('0xA8C09F16998DFD28', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, disable);
	return disableNavmeshInArea_result;
}