/**
 * PATHFIND:ADD_NAVMESH_REQUIRED_REGION
 *
 * 0x8998A86E45C5155C

 * 
 * Defined the scripted optional scripted region which will have navmesh loaded at all times
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 */
export function addNavmeshRequiredRegion(x: number, y: number, radius: number): void {
	const addNavmeshRequiredRegion_result = Citizen.invokeNative<void>('0x8998A86E45C5155C', x, y, radius);
	return addNavmeshRequiredRegion_result;
}