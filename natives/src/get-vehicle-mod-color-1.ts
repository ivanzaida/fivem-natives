import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_COLOR_1
 *
 * 0xB8090FC59766A88C

 * 
 * specColIndex only applies to MCT_PEARLESCENT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} colorType [Ref]
 * @param {IntRef} baseCol [Ref]
 * @param {IntRef} specCol [Ref]
 */
export function getVehicleModColor_1(vehicle: VehicleIndex, colorType: IntRef /* ptr */, baseCol: IntRef /* ptr */, specCol: IntRef /* ptr */): void {
	const getVehicleModColor_1_result = Citizen.invokeNative<void>('0xB8090FC59766A88C', vehicle, colorType.dataView, baseCol.dataView, specCol.dataView);
	return getVehicleModColor_1_result;
}