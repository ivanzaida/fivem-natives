import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_COLOR_2
 *
 * 0x07AE5F5D5A7D0936

 * 
 * specColIndex only applies to MCT_PEARLESCENT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} colorType [Ref]
 * @param {IntRef} baseCol [Ref]
 */
export function getVehicleModColor_2(vehicle: VehicleIndex, colorType: IntRef /* ptr */, baseCol: IntRef /* ptr */): void {
	const getVehicleModColor_2_result = Citizen.invokeNative<void>('0x07AE5F5D5A7D0936', vehicle, colorType.dataView, baseCol.dataView);
	return getVehicleModColor_2_result;
}