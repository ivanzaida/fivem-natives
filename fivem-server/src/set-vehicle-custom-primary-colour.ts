import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_CUSTOM_PRIMARY_COLOUR
 *
 * 0x8DF9F9BC

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
export function setVehicleCustomPrimaryColour(vehicle: VehicleIndex, r: number, g: number, b: number): void {
	const setVehicleCustomPrimaryColour_result = Citizen.invokeNative<void>('0x8DF9F9BC', vehicle, r, g, b);
	return setVehicleCustomPrimaryColour_result;
}