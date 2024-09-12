import { PedIndex, ERagdollFallTypes } from '@ivanzaida/structures'

/**
 * PED:SET_PED_TO_RAGDOLL_WITH_FALL
 *
 * 0x52B67D4C57E4BF4B

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
 * @param {number} minTime
 * @param {number} maxTime
 * @param {ERagdollFallTypes} fallType
 * @param {number} vecDirectionX
 * @param {number} vecDirectionY
 * @param {number} vecDirectionZ
 * @param {number} groundHeight
 * @param {number} vecGrab1X
 * @param {number} vecGrab1Y
 * @param {number} vecGrab1Z
 * @param {number} vecGrab2X
 * @param {number} vecGrab2Y
 * @param {number} vecGrab2Z
 * @returns {boolean}  
 */
export function setPedToRagdollWithFall(ped: PedIndex, minTime: number, maxTime: number, fallType: ERagdollFallTypes | number, vecDirectionX: number, vecDirectionY: number, vecDirectionZ: number, groundHeight: number, vecGrab1X: number, vecGrab1Y: number, vecGrab1Z: number, vecGrab2X: number, vecGrab2Y: number, vecGrab2Z: number): boolean {
	const setPedToRagdollWithFall_result = Citizen.invokeNative<boolean>('0x52B67D4C57E4BF4B', ped, minTime, maxTime, fallType, vecDirectionX, vecDirectionY, vecDirectionZ, groundHeight, vecGrab1X, vecGrab1Y, vecGrab1Z, vecGrab2X, vecGrab2Y, vecGrab2Z);
	return setPedToRagdollWithFall_result;
}