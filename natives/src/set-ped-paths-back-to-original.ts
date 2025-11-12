/**
 * PATHFIND:SET_PED_PATHS_BACK_TO_ORIGINAL
 *
 * 0xE649818AF72843C4

 * 
 * It is not cool to call a SET_PED_PATHS_IN_AREA(true)  to undo a SET_PED_PATHS_IN_AREA(false) because the nodes that were originally off would now be on.
 * 
 * p6 is always 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsMinX
 * @param {number} coorsMinY
 * @param {number} coorsMinZ
 * @param {number} coorsMaxX
 * @param {number} coorsMaxY
 * @param {number} coorsMaxZ
 * @param {boolean} forceAbortCurrentPath Avoid possible stalls by forcing any active path request to be aborted use this if there are reports of this command causing brief hangs waiting for navmesh data to be accessible but be aware that if timingcritical pathfinding is occuring, that it can be interruped by this
 */
export function setPedPathsBackToOriginal(coorsMinX: number, coorsMinY: number, coorsMinZ: number, coorsMaxX: number, coorsMaxY: number, coorsMaxZ: number, forceAbortCurrentPath: boolean = false): void {
	const setPedPathsBackToOriginal_result = Citizen.invokeNative<void>('0xE649818AF72843C4', coorsMinX, coorsMinY, coorsMinZ, coorsMaxX, coorsMaxY, coorsMaxZ, forceAbortCurrentPath);
	return setPedPathsBackToOriginal_result;
}