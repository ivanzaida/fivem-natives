import { PedIndex, ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:SET_PED_RELATIONSHIP_GROUP_DEFAULT_HASH
 *
 * 0x17ABD7A8B101AF83

 * 
 * Sets the ped's relationship group default to the one passed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ERelGroupHash} relGroup
 */
export function setPedRelationshipGroupDefaultHash(ped: PedIndex, relGroup: ERelGroupHash | number): void {
	const setPedRelationshipGroupDefaultHash_result = Citizen.invokeNative<void>('0x17ABD7A8B101AF83', ped, relGroup);
	return setPedRelationshipGroupDefaultHash_result;
}