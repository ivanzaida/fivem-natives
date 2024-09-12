import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:REMOVE_VEHICLE_UPSIDEDOWN_CHECK
 *
 * 0xD27458C016741B0C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function removeVehicleUpsidedownCheck(vehicle: VehicleIndex): void {
	const removeVehicleUpsidedownCheck_result = Citizen.invokeNative<void>('0xD27458C016741B0C', vehicle);
	return removeVehicleUpsidedownCheck_result;
}