import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_RAGDOLL_ON_COLLISION
 *
 * 0xF9E1F44FD9B4934B

 * 
 * Causes Ped to ragdoll on collision with any object (e.g Running into trashcan). If applied to player you will sometimes trip on the sidewalk.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} ragdollOnCollision
 */
export function setPedRagdollOnCollision(ped: PedIndex, ragdollOnCollision: boolean): void {
	const setPedRagdollOnCollision_result = Citizen.invokeNative<void>('0xF9E1F44FD9B4934B', ped, ragdollOnCollision);
	return setPedRagdollOnCollision_result;
}