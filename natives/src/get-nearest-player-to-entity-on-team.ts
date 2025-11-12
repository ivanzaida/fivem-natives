import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_NEAREST_PLAYER_TO_ENTITY_ON_TEAM
 *
 * 0x87384D2CF86135EB

 * 
 * Get the closest player to an entity on a particular team
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} team
 * @returns {number}  
 */
export function getNearestPlayerToEntityOnTeam(entity: EntityIndex, team: number): number {
	const getNearestPlayerToEntityOnTeam_result = Citizen.invokeNative<number>('0x87384D2CF86135EB', entity, team);
	return getNearestPlayerToEntityOnTeam_result;
}