import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NEON_COLOUR
 *
 * 0xEAB8A43F6621850F

 * 
 * Sets the color of the neon lights of the specified vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function setVehicleNeonColour(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const setVehicleNeonColour_result = Citizen.invokeNative<void>('0xEAB8A43F6621850F', vehicle, red, green, blue);
	return setVehicleNeonColour_result;
}