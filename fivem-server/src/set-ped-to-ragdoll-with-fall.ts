import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_TO_RAGDOLL_WITH_FALL
 *
 * 0xFA12E286

 * Return variable is never used in R's scripts.
 * Not sure what p2 does. It seems like it would be a time judging by it's usage in R's scripts, but didn't seem to affect anything in my testings.
 * enum eRagdollType
 * {
 *  RD_MALE=0,
 *  RD_FEMALE = 1,
 *  RD_MALE_LARGE = 2,
 *  RD_CUSTOM = 3,
 * }
 * x, y, and z are coordinates, most likely to where the ped will fall.
 * p8 to p13 are always 0f in R's scripts.
 * (Simplified) Example of the usage of the function from R's scripts:
 * ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} time
 * @param {number} p2
 * @param {number} ragdollType
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} p10
 * @param {number} p11
 * @param {number} p12
 * @param {number} p13
 * @returns {boolean}  
 */
export function setPedToRagdollWithFall(ped: PedIndex, time: number, p2: number, ragdollType: number, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): boolean {
	const setPedToRagdollWithFall_result = Citizen.invokeNative<boolean>('0xFA12E286', ped, time, p2, ragdollType, x, y, z, p7, p8, p9, p10, p11, p12, p13);
	return setPedToRagdollWithFall_result;
}