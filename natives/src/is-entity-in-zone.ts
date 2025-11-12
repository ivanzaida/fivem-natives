import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_IN_ZONE
 *
 * 0xDECEB0709855F876

 * 
 * Checks if the entity is a specific zone on the map.
 * If the entity is a ped in a vehicle, then the coords of the vehicle are used in the check.
 * 
 * Full list of zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/zones.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} zoneLabel
 * @returns {boolean}  
 */
export function isEntityInZone(entity: EntityIndex, zoneLabel: string): boolean {
	const isEntityInZone_result = Citizen.invokeNative<boolean>('0xDECEB0709855F876', entity, zoneLabel);
	return isEntityInZone_result;
}