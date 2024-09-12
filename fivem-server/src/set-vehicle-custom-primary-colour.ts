import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_CUSTOM_PRIMARY_COLOUR
 *
 * 0X8DF9F9BC

 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function setVehicleCustomPrimaryColour(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const setVehicleCustomPrimaryColour_result = Citizen.invokeNative<void>('0X8DF9F9BC', vehicle, red, green, blue);
	return setVehicleCustomPrimaryColour_result;
}