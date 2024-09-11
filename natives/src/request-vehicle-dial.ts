import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:REQUEST_VEHICLE_DIAL
 *
 * 0x4C8F181F63537DD2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function requestVehicleDial(vehicle: VehicleIndex): void {
	const requestVehicleDial_result = Citizen.invokeNative<void>('0x4C8F181F63537DD2', vehicle);
	return requestVehicleDial_result;
}