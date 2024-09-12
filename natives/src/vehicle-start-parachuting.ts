import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_START_PARACHUTING
 *
 * 0xDCD94B3260CB762C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} allowPlayerCancelParachuting
 */
export function vehicleStartParachuting(vehicle: VehicleIndex, allowPlayerCancelParachuting: boolean = true): void {
	const vehicleStartParachuting_result = Citizen.invokeNative<void>('0xDCD94B3260CB762C', vehicle, allowPlayerCancelParachuting);
	return vehicleStartParachuting_result;
}