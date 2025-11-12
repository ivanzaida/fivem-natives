/**
 * PATHFIND:ADJUST_AMBIENT_PED_SPAWN_DENSITIES_THIS_FRAME
 *
 * 0xBAC712AB83AFA8CC

 * 
 * Causes the "PED DENSITY" in the given axis-aligned box to be boosted/reduced by the provided amount.
 * This can be used to cause more or less peds to spawn in a given area, than is set in the navmesh.
 * It will not have any affect upon areas where the ped density is by deafult zero.
 * This command should be called every frame for as long as it is required.
 * Only one such region may be set per frame, an assert will fire if it is set more that once per frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} adjustment
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 */
export function adjustAmbientPedSpawnDensitiesThisFrame(adjustment: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): void {
	const adjustAmbientPedSpawnDensitiesThisFrame_result = Citizen.invokeNative<void>('0xBAC712AB83AFA8CC', adjustment, minX, minY, minZ, maxX, maxY, maxZ);
	return adjustAmbientPedSpawnDensitiesThisFrame_result;
}