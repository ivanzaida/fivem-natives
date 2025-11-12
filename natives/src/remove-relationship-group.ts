import { ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:REMOVE_RELATIONSHIP_GROUP
 *
 * 0x2B1BDC32466B40A9

 * 
 * Removes a relationship group by hash value
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ERelGroupHash} group
 */
export function removeRelationshipGroup(group: ERelGroupHash | number): void {
	const removeRelationshipGroup_result = Citizen.invokeNative<void>('0x2B1BDC32466B40A9', group);
	return removeRelationshipGroup_result;
}