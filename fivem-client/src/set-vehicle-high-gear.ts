import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_HIGH_GEAR
 *
 * 0X20B1B3E6

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} gear
 */
export function setVehicleHighGear(vehicle: VehicleIndex, gear: number): void {
	const setVehicleHighGear_result = Citizen.invokeNative<void>('0X20B1B3E6', vehicle, gear);
	return setVehicleHighGear_result;
}