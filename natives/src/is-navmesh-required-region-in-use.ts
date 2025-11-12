/**
 * PATHFIND:IS_NAVMESH_REQUIRED_REGION_IN_USE
 *
 * 0x53F38E2C8579B2AA

 * 
 * Returns whether a script is using the navmesh region (including the calling script)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isNavmeshRequiredRegionInUse(): boolean {
	const isNavmeshRequiredRegionInUse_result = Citizen.invokeNative<boolean>('0x53F38E2C8579B2AA', );
	return isNavmeshRequiredRegionInUse_result;
}