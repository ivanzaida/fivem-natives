import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DETACH_VEHICLE_FROM_CARGOBOB
 *
 * 0x84448CC61691D994

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {VehicleIndex} vehicle
 */
export function detachVehicleFromCargobob(cargobob: VehicleIndex, vehicle: VehicleIndex): void {
	const detachVehicleFromCargobob_result = Citizen.invokeNative<void>('0x84448CC61691D994', cargobob, vehicle);
	return detachVehicleFromCargobob_result;
}