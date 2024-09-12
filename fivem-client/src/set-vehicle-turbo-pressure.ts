import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_TURBO_PRESSURE
 *
 * 0X6485615E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} pressure
 */
export function setVehicleTurboPressure(vehicle: VehicleIndex, pressure: number): void {
	const setVehicleTurboPressure_result = Citizen.invokeNative<void>('0X6485615E', vehicle, pressure);
	return setVehicleTurboPressure_result;
}