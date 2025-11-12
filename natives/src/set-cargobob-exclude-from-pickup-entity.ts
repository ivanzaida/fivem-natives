import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_EXCLUDE_FROM_PICKUP_ENTITY
 *
 * 0x9E3907AACB2EE9A3

 * 
 * Attaches an entity to a cargobob
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {EntityIndex} entity
 */
export function setCargobobExcludeFromPickupEntity(cargobob: VehicleIndex, entity: EntityIndex): void {
	const setCargobobExcludeFromPickupEntity_result = Citizen.invokeNative<void>('0x9E3907AACB2EE9A3', cargobob, entity);
	return setCargobobExcludeFromPickupEntity_result;
}