/**
 * MISC:CLEAR_TACTICAL_NAV_MESH_POINTS
 *
 * 0x81B15F40AAE95932

 * 
 * Clears the tactical nav mesh points
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearTacticalNavMeshPoints(): void {
	const clearTacticalNavMeshPoints_result = Citizen.invokeNative<void>('0x81B15F40AAE95932', );
	return clearTacticalNavMeshPoints_result;
}