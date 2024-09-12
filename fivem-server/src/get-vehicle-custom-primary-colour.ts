import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_CUSTOM_PRIMARY_COLOUR
 *
 * 0x1C2B9FEF

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function getVehicleCustomPrimaryColour(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const getVehicleCustomPrimaryColour_result = Citizen.invokeNative<void>('0x1C2B9FEF', vehicle, red, green, blue);
	return getVehicleCustomPrimaryColour_result;
}