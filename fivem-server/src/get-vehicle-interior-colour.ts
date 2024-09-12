import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_INTERIOR_COLOUR
 *
 * 0xCCFF3B6E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} color [Ref]
 */
export function getVehicleInteriorColour(vehicle: VehicleIndex, color: IntRef /* ptr */): void {
	const getVehicleInteriorColour_result = Citizen.invokeNative<void>('0xCCFF3B6E', vehicle, color.dataView);
	return getVehicleInteriorColour_result;
}