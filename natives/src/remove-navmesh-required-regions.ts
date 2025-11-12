/**
 * PATHFIND:REMOVE_NAVMESH_REQUIRED_REGIONS
 *
 * 0x81F9331288182129

 * 
 * Removes the navmesh required region
 * 
 * 
 * ------------------------------------------------------------------
 */
export function removeNavmeshRequiredRegions(): void {
	const removeNavmeshRequiredRegions_result = Citizen.invokeNative<void>('0x81F9331288182129', );
	return removeNavmeshRequiredRegions_result;
}