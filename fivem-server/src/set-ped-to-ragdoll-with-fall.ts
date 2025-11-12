import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_TO_RAGDOLL_WITH_FALL
 *
 * 0xFA12E286

 * 
 * Return variable is never used in R's scripts.
 * 
 * Not sure what p2 does. It seems like it would be a time judging by it's usage in R's scripts, but didn't seem to affect anything in my testings.
 * 
 * enum eRagdollType
 * {
 *  RD_MALE=0,
 *  RD_FEMALE = 1,
 *  RD_MALE_LARGE = 2,
 *  RD_CUSTOM = 3,
 * }
 * 
 * x, y, and z are coordinates, most likely to where the ped will fall.
 * 
 * p8 to p13 are always 0f in R's scripts.
 * 
 * (Simplified) Example of the usage of the function from R's scripts:
 * ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped to ragdoll.
 * @param {number} minTime
 * @param {number} maxTime
 * @param {number} nFallType The type of fall.
 * @param {number} dirX The x direction of the fall.
 * @param {number} dirY The y direction of the fall.
 * @param {number} dirZ The z direction of the fall.
 * @param {number} fGroundHeight The ground height (z).
 * @param {number} grab1X unused
 * @param {number} grab1Y unused
 * @param {number} grab1Z unused
 * @param {number} grab2X unused
 * @param {number} grab2Y unused
 * @param {number} grab2Z unused
 * @returns {boolean}  
 */
export function setPedToRagdollWithFall(ped: PedIndex, minTime: number, maxTime: number, nFallType: number, dirX: number, dirY: number, dirZ: number, fGroundHeight: number, grab1X: number, grab1Y: number, grab1Z: number, grab2X: number, grab2Y: number, grab2Z: number): boolean {
	const setPedToRagdollWithFall_result = Citizen.invokeNative<boolean>('0xFA12E286', ped, minTime, maxTime, nFallType, dirX, dirY, dirZ, fGroundHeight, grab1X, grab1Y, grab1Z, grab2X, grab2Y, grab2Z);
	return setPedToRagdollWithFall_result;
}