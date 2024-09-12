import { PedIndex, ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:TELL_GROUP_PEDS_IN_AREA_TO_ATTACK
 *
 * 0xC0343109FF76497E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} targetPed
 * @param {number} scrVectorCenterCoordsX
 * @param {number} scrVectorCenterCoordsY
 * @param {number} scrVectorCenterCoordsZ
 * @param {number} radius
 * @param {ERelGroupHash} relGroup
 */
export function tellGroupPedsInAreaToAttack(targetPed: PedIndex, scrVectorCenterCoordsX: number, scrVectorCenterCoordsY: number, scrVectorCenterCoordsZ: number, radius: number, relGroup: ERelGroupHash | number): void {
	const tellGroupPedsInAreaToAttack_result = Citizen.invokeNative<void>('0xC0343109FF76497E', targetPed, scrVectorCenterCoordsX, scrVectorCenterCoordsY, scrVectorCenterCoordsZ, radius, relGroup);
	return tellGroupPedsInAreaToAttack_result;
}