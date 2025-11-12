import { IntRef } from '@ivanzaida/structures'

/**
 * PED:ADD_RELATIONSHIP_GROUP
 *
 * 0x06CD913C241C765E

 * 
 * Adds a relationship group, returns the group as a reference, returns true if succesful
 * 
 * Can't select void. This function returns nothing. The hash of the created relationship group is output in the second parameter.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {IntRef} group [Ref]
 * @returns {boolean}  
 */
export function addRelationshipGroup(name: string, group: IntRef /* ptr */): boolean {
	const addRelationshipGroup_result = Citizen.invokeNative<boolean>('0x06CD913C241C765E', name, group.dataView);
	return addRelationshipGroup_result;
}