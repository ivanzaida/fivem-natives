import { ERelGroupHash, ERelationshipType } from '@ivanzaida/structures'

/**
 * PED:GET_RELATIONSHIP_BETWEEN_GROUPS
 *
 * 0x048553DADAD2512F

 * 
 * Gets the relationship between two groups. This should be called twice (once for each group).
 * 
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 * 
 * Example:
 * PED::GET_RELATIONSHIP_BETWEEN_GROUPS(l_1017, 0xA49E591C);
 * PED::GET_RELATIONSHIP_BETWEEN_GROUPS(0xA49E591C, l_1017);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ERelGroupHash} relGroupA
 * @param {ERelGroupHash} relGroupB
 * @returns {ERelationshipType}  
 */
export function getRelationshipBetweenGroups(relGroupA: ERelGroupHash | number, relGroupB: ERelGroupHash | number): ERelationshipType {
	const getRelationshipBetweenGroups_result = Citizen.invokeNative<ERelationshipType>('0x048553DADAD2512F', relGroupA, relGroupB);
	return getRelationshipBetweenGroups_result;
}