import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CUSTOM_PRIMARY_COLOUR
 *
 * 0x84F5FD9CD27457EE

 * 
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function setVehicleCustomPrimaryColour(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const setVehicleCustomPrimaryColour_result = Citizen.invokeNative<void>('0x84F5FD9CD27457EE', vehicle, red, green, blue);
	return setVehicleCustomPrimaryColour_result;
}