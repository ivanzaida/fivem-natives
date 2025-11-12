import { ERelationshipType, ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:SET_RELATIONSHIP_BETWEEN_GROUPS
 *
 * 0xD414C47AFF81382A

 * 
 * To get 2 rel groups to hate each other, set the relationship for both grps
 * 
 * Sets the relationship between two groups. This should be called twice (once for each group).
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
 * PED::SET_RELATIONSHIP_BETWEEN_GROUPS(2, l_1017, 0xA49E591C);
 * PED::SET_RELATIONSHIP_BETWEEN_GROUPS(2, 0xA49E591C, l_1017);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ERelationshipType} relationshipType
 * @param {ERelGroupHash} relGroup
 * @param {ERelGroupHash} otherRelGroup
 */
export function setRelationshipBetweenGroups(relationshipType: ERelationshipType | number, relGroup: ERelGroupHash | number, otherRelGroup: ERelGroupHash | number): void {
	const setRelationshipBetweenGroups_result = Citizen.invokeNative<void>('0xD414C47AFF81382A', relationshipType, relGroup, otherRelGroup);
	return setRelationshipBetweenGroups_result;
}