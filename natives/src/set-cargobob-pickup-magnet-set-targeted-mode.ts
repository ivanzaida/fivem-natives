import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_SET_TARGETED_MODE
 *
 * 0x9E33FC86B0212DAB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {EntityIndex} targetEntity
 */
export function setCargobobPickupMagnetSetTargetedMode(cargobob: VehicleIndex, targetEntity: EntityIndex): void {
	const setCargobobPickupMagnetSetTargetedMode_result = Citizen.invokeNative<void>('0x9E33FC86B0212DAB', cargobob, targetEntity);
	return setCargobobPickupMagnetSetTargetedMode_result;
}