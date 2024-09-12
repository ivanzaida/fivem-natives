import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_CUSTOM_SECONDARY_COLOUR
 *
 * 0x3FF247A2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function getVehicleCustomSecondaryColour(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const getVehicleCustomSecondaryColour_result = Citizen.invokeNative<void>('0x3FF247A2', vehicle, red, green, blue);
	return getVehicleCustomSecondaryColour_result;
}