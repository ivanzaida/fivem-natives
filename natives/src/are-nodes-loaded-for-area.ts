/**
 * PATHFIND:ARE_NODES_LOADED_FOR_AREA
 *
 * 0xFFEB5F24B372DFF6

 * 
 * Returns true if path nodes are loaded for the region specified
 * Unlike LOAD_ALL_PATH_NODES(), we don't return a bool for the initial request,
 * so use this function to query if the nodes you want are loaded
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} maxX
 * @param {number} maxY
 * @returns {boolean}  
 */
export function areNodesLoadedForArea(minX: number, minY: number, maxX: number, maxY: number): boolean {
	const areNodesLoadedForArea_result = Citizen.invokeNative<boolean>('0xFFEB5F24B372DFF6', minX, minY, maxX, maxY);
	return areNodesLoadedForArea_result;
}