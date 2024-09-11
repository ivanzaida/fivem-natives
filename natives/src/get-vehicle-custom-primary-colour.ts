import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CUSTOM_PRIMARY_COLOUR
 *
 * 0xD9B9D4D1CCED7CA6

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getVehicleCustomPrimaryColour(vehicle: VehicleIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getVehicleCustomPrimaryColour_result = Citizen.invokeNative<void>('0xD9B9D4D1CCED7CA6', vehicle, red.dataView, green.dataView, blue.dataView);
	return getVehicleCustomPrimaryColour_result;
}