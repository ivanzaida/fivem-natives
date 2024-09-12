import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_TYRE_SMOKE_COLOR
 *
 * 0x75280015

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} r [Ref]
 * @param {IntRef} g [Ref]
 * @param {IntRef} b [Ref]
 */
export function getVehicleTyreSmokeColor(vehicle: VehicleIndex, r: IntRef /* ptr */, g: IntRef /* ptr */, b: IntRef /* ptr */): void {
	const getVehicleTyreSmokeColor_result = Citizen.invokeNative<void>('0x75280015', vehicle, r.dataView, g.dataView, b.dataView);
	return getVehicleTyreSmokeColor_result;
}