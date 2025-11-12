import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_CUSTOM_SECONDARY_COLOUR
 *
 * 0x9D77259E

 * 
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
export function setVehicleCustomSecondaryColour(vehicle: VehicleIndex, r: number, g: number, b: number): void {
	const setVehicleCustomSecondaryColour_result = Citizen.invokeNative<void>('0x9D77259E', vehicle, r, g, b);
	return setVehicleCustomSecondaryColour_result;
}