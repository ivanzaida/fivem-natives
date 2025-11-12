import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_EXTENDED_REMOVAL_RANGE
 *
 * 0x8C1172B230F4EB1A

 * 
 * Max value is 32767
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} removalRange
 */
export function setVehicleExtendedRemovalRange(vehicle: VehicleIndex, removalRange: number): void {
	const setVehicleExtendedRemovalRange_result = Citizen.invokeNative<void>('0x8C1172B230F4EB1A', vehicle, removalRange);
	return setVehicleExtendedRemovalRange_result;
}