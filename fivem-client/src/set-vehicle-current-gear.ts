import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_CURRENT_GEAR
 *
 * 0x8923DD42

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @param {number} gear The gear you want the vehicle to use.
 */
export function setVehicleCurrentGear(vehicle: VehicleIndex, gear: number): void {
	const setVehicleCurrentGear_result = Citizen.invokeNative<void>('0x8923DD42', vehicle, gear);
	return setVehicleCurrentGear_result;
}