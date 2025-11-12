import { ERelationshipType, ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:CLEAR_RELATIONSHIP_BETWEEN_GROUPS
 *
 * 0x40D1AAC4EFD3C281

 * 
 * Clears the relationship between two groups. This should be called twice (once for each group).
 * 
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 * (Credits: Inco)
 * 
 * Example:
 * PED::CLEAR_RELATIONSHIP_BETWEEN_GROUPS(2, l_1017, 0xA49E591C);
 * PED::CLEAR_RELATIONSHIP_BETWEEN_GROUPS(2, 0xA49E591C, l_1017);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ERelationshipType} relationshipType
 * @param {ERelGroupHash} relGroup
 * @param {ERelGroupHash} otherRelGroup
 */
export function clearRelationshipBetweenGroups(relationshipType: ERelationshipType | number, relGroup: ERelGroupHash | number, otherRelGroup: ERelGroupHash | number): void {
	const clearRelationshipBetweenGroups_result = Citizen.invokeNative<void>('0x40D1AAC4EFD3C281', relationshipType, relGroup, otherRelGroup);
	return clearRelationshipBetweenGroups_result;
}