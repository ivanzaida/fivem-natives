/**
 * PATHFIND:REQUEST_PATH_NODES_IN_AREA_THIS_FRAME
 *
 * 0x693ACD1AA0BDB375

 * 
 * When this command is called, the path nodes in the given region be requested by streaming that frame.
 * This does not guarantee that the nodes will be loaded this frame, you should keep calling this command
 * for as long as you wish nodes to be present in the given area, and you should call ARE_NODES_LOADED_FOR_AREA
 * to check for when they have streamed in.
 * If you stop calling this command, the nodes may be streamed out again at any time.
 * 
 * Used internally for long range tasks
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} maxX
 * @param {number} maxY
 * @returns {boolean}  
 */
export function requestPathNodesInAreaThisFrame(minX: number, minY: number, maxX: number, maxY: number): boolean {
	const requestPathNodesInAreaThisFrame_result = Citizen.invokeNative<boolean>('0x693ACD1AA0BDB375', minX, minY, maxX, maxY);
	return requestPathNodesInAreaThisFrame_result;
}