import { PedIndex, ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:SET_PED_RELATIONSHIP_GROUP_HASH
 *
 * 0x3CEA1FD137ACE2D9

 * 
 * Sets the peds relationship group to the one passed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ERelGroupHash} relGroup
 */
export function setPedRelationshipGroupHash(ped: PedIndex, relGroup: ERelGroupHash | number): void {
	const setPedRelationshipGroupHash_result = Citizen.invokeNative<void>('0x3CEA1FD137ACE2D9', ped, relGroup);
	return setPedRelationshipGroupHash_result;
}