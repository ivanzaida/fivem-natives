import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_BRAKE
 *
 * 0x9F571FBA7F9412D5

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} brakes
 */
export function setVehicleBrake(vehicle: VehicleIndex, brakes: number): void {
	const setVehicleBrake_result = Citizen.invokeNative<void>('0x9F571FBA7F9412D5', vehicle, brakes);
	return setVehicleBrake_result;
}