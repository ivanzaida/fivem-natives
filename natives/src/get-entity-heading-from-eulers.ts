import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_HEADING_FROM_EULERS
 *
 * 0xC5A566D912050568

 * 
 * Gets the entity's heading in degrees. If the entity is a ped in a vehicle, then the heading of the
 * vehicle is returned;
 * 
 * Gets the heading of the entity physics in degrees, which tends to be more accurate than just "GET_ENTITY_HEADING". This can be clearly seen while, for example, ragdolling a ped/player.
 * 
 * NOTE: The name and description of this native are based on independent research. If you find this native to be more suitable under a different name and/or described differently, please feel free to do so.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityHeadingFromEulers(entity: EntityIndex): number {
	const getEntityHeadingFromEulers_result = Citizen.invokeNative<number>('0xC5A566D912050568', entity);
	return getEntityHeadingFromEulers_result;
}