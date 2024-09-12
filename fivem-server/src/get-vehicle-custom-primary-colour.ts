import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_CUSTOM_PRIMARY_COLOUR
 *
 * 0x1C2B9FEF

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} r [Ref]
 * @param {IntRef} g [Ref]
 * @param {IntRef} b [Ref]
 */
export function getVehicleCustomPrimaryColour(vehicle: VehicleIndex, r: IntRef /* ptr */, g: IntRef /* ptr */, b: IntRef /* ptr */): void {
	const getVehicleCustomPrimaryColour_result = Citizen.invokeNative<void>('0x1C2B9FEF', vehicle, r.dataView, g.dataView, b.dataView);
	return getVehicleCustomPrimaryColour_result;
}