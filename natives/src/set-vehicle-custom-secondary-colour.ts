import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CUSTOM_SECONDARY_COLOUR
 *
 * 0x593A3115B8AE759B

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
export function setVehicleCustomSecondaryColour(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const setVehicleCustomSecondaryColour_result = Citizen.invokeNative<void>('0x593A3115B8AE759B', vehicle, red, green, blue);
	return setVehicleCustomSecondaryColour_result;
}