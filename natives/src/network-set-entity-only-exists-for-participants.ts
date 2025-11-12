import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_ENTITY_ONLY_EXISTS_FOR_PARTICIPANTS
 *
 * 0x32C336953C18A3CE

 * 
 * if set to true other network players can't see it
 * if set to false other network player can see it
 * =========================================
 * ^^ I attempted this by grabbing an object with GET_ENTITY_PLAYER_IS_FREE_AIMING_AT and setting this naive no matter the toggle he could still see it.
 * 
 * pc or last gen?
 * 
 * ^^ last-gen
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} exists
 */
export function networkSetEntityOnlyExistsForParticipants(entity: EntityIndex, exists: boolean): void {
	const networkSetEntityOnlyExistsForParticipants_result = Citizen.invokeNative<void>('0x32C336953C18A3CE', entity, exists);
	return networkSetEntityOnlyExistsForParticipants_result;
}