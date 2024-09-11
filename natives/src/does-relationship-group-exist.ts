import { ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:DOES_RELATIONSHIP_GROUP_EXIST
 *
 * 0xB2AE1A67479A5AF3

 * 
 * ------------------------------------------------------------------
 * @param {ERelGroupHash} relGroup
 * @returns {boolean}  
 */
export function doesRelationshipGroupExist(relGroup: ERelGroupHash | number): boolean {
	const doesRelationshipGroupExist_result = Citizen.invokeNative<boolean>('0xB2AE1A67479A5AF3', relGroup);
	return doesRelationshipGroupExist_result;
}