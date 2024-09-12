import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:STABILISE_ENTITY_ATTACHED_TO_HELI
 *
 * 0x8FB959083319E145

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EntityIndex} entity
 * @param {number} springDistance
 */
export function stabiliseEntityAttachedToHeli(vehicle: VehicleIndex, entity: EntityIndex, springDistance: number): void {
	const stabiliseEntityAttachedToHeli_result = Citizen.invokeNative<void>('0x8FB959083319E145', vehicle, entity, springDistance);
	return stabiliseEntityAttachedToHeli_result;
}