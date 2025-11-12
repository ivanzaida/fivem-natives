import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_COLOR
 *
 * 0x8D3F11438EEDD7D2

 * 
 * What's this for? Primary and Secondary RGB have their own natives and this one doesn't seem specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getVehicleColor(vehicle: VehicleIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getVehicleColor_result = Citizen.invokeNative<void>('0x8D3F11438EEDD7D2', vehicle, red.dataView, green.dataView, blue.dataView);
	return getVehicleColor_result;
}