import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_CUSTOM_SECONDARY_COLOUR
 *
 * 0X9D77259E

 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function setVehicleCustomSecondaryColour(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const setVehicleCustomSecondaryColour_result = Citizen.invokeNative<void>('0X9D77259E', vehicle, red, green, blue);
	return setVehicleCustomSecondaryColour_result;
}