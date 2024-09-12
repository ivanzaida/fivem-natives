import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_TYRE_SMOKE_COLOR
 *
 * 0x9D35AABAEE206518

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getVehicleTyreSmokeColor(vehicle: VehicleIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getVehicleTyreSmokeColor_result = Citizen.invokeNative<void>('0x9D35AABAEE206518', vehicle, red.dataView, green.dataView, blue.dataView);
	return getVehicleTyreSmokeColor_result;
}