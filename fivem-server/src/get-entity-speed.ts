import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_SPEED
 *
 * 0x9E1E4798

 * Gets the speed an entity is travelling in a forward direction (m/sec). If the entity is a ped in a vehicle, then the
 * speed of the vehicle is returned;
 * result is in meters per second
 * ------------------------------------------------------------
 * So would the conversion to mph and km/h, be along the lines of this.
 * float speed = GET_ENTITY_SPEED(veh);
 * float kmh = (speed  3.6);
 * float mph = (speed  2.236936);
 * ------------------------------------------------------------
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntitySpeed(entity: EntityIndex): number {
	const getEntitySpeed_result = Citizen.invokeNative<number>('0x9E1E4798', entity);
	return getEntitySpeed_result;
}