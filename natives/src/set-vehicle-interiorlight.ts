import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_INTERIORLIGHT
 *
 * 0xEC6A9F16D3F15978

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} interiorSetting
 */
export function setVehicleInteriorlight(vehicle: VehicleIndex, interiorSetting: boolean): void {
	const setVehicleInteriorlight_result = Citizen.invokeNative<void>('0xEC6A9F16D3F15978', vehicle, interiorSetting);
	return setVehicleInteriorlight_result;
}