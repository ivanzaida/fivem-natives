import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HEADLIGHTS_COLOUR
 *
 * 0XD7147656

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleHeadlightsColour(vehicle: VehicleIndex): number {
	const getVehicleHeadlightsColour_result = Citizen.invokeNative<number>('0XD7147656', vehicle);
	return getVehicleHeadlightsColour_result;
}