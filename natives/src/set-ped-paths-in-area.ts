/**
 * PATHFIND:SET_PED_PATHS_IN_AREA
 *
 * 0x79CA429D8B4B057A

 * 
 * When a path is switched off, no peds will be created on it and peds that already exist will not use this path to get to a destination.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {boolean} active
 * @param {boolean} forceAbortCurrentPath Avoid possible stalls by forcing any active path request to be aborted use this if there are reports of this command causing brief hangs waiting for navmesh data to be accessible but be aware that if timingcritical pathfinding is occuring, that it can be interruped by this
 */
export function setPedPathsInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, active: boolean, forceAbortCurrentPath: boolean = false): void {
	const setPedPathsInArea_result = Citizen.invokeNative<void>('0x79CA429D8B4B057A', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, active, forceAbortCurrentPath);
	return setPedPathsInArea_result;
}