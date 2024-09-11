import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:CLEAR_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR
 *
 * 0X2867ED8C

 * Removes vehicle xenon lights custom RGB color.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 */
export function clearVehicleXenonLightsCustomColor(vehicle: VehicleIndex): void {
	const clearVehicleXenonLightsCustomColor_result = Citizen.invokeNative<void>('0X2867ED8C', vehicle);
	return clearVehicleXenonLightsCustomColor_result;
}