import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_CUSTOM_SECONDARY_COLOUR
 *
 * 0x3FF247A2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} r [Ref]
 * @param {IntRef} g [Ref]
 * @param {IntRef} b [Ref]
 */
export function getVehicleCustomSecondaryColour(vehicle: VehicleIndex, r: IntRef /* ptr */, g: IntRef /* ptr */, b: IntRef /* ptr */): void {
	const getVehicleCustomSecondaryColour_result = Citizen.invokeNative<void>('0x3FF247A2', vehicle, r.dataView, g.dataView, b.dataView);
	return getVehicleCustomSecondaryColour_result;
}