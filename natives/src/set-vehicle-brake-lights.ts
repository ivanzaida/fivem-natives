import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_BRAKE_LIGHTS
 *
 * 0xE456FB21FF21AE99

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} on
 */
export function setVehicleBrakeLights(vehicle: VehicleIndex, on: boolean): void {
	const setVehicleBrakeLights_result = Citizen.invokeNative<void>('0xE456FB21FF21AE99', vehicle, on);
	return setVehicleBrakeLights_result;
}