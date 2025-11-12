/**
 * PATHFIND:ARE_ALL_NAVMESH_REGIONS_LOADED
 *
 * 0xD33AE43EA8DC1C58

 * 
 * This applies to the navmeshes which are always loaded in around the player, as well as any additional navmesh load regions which may have been set up.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function areAllNavmeshRegionsLoaded(): boolean {
	const areAllNavmeshRegionsLoaded_result = Citizen.invokeNative<boolean>('0xD33AE43EA8DC1C58', );
	return areAllNavmeshRegionsLoaded_result;
}