import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ATTACH_VEHICLE_TO_TRAILER
 *
 * 0xF89624E52FCBE454

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {VehicleIndex} trailer
 * @param {number} inverseMassScale
 */
export function attachVehicleToTrailer(vehicle: VehicleIndex, trailer: VehicleIndex, inverseMassScale: number = 1): void {
	const attachVehicleToTrailer_result = Citizen.invokeNative<void>('0xF89624E52FCBE454', vehicle, trailer, inverseMassScale);
	return attachVehicleToTrailer_result;
}