import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_FUEL_LEVEL
 *
 * 0xBA970511

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} level
 */
export function setVehicleFuelLevel(vehicle: VehicleIndex, level: number): void {
	const setVehicleFuelLevel_result = Citizen.invokeNative<void>('0xBA970511', vehicle, level);
	return setVehicleFuelLevel_result;
}