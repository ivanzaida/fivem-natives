import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR
 *
 * 0xC715F730

 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [_SET_VEHICLE_XENON_LIGHTS_COLOR](#_0xE41033B25D003A07).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @param {IntRef} red Red color (0255). [Ref]
 * @param {IntRef} green Green color (0255). [Ref]
 * @param {IntRef} blue Blue color (0255). [Ref]
 * @returns {boolean}  A boolean indicating if vehicle have custom xenon lights RGB color.
 */
export function getVehicleXenonLightsCustomColor(vehicle: VehicleIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): boolean {
	const getVehicleXenonLightsCustomColor_result = Citizen.invokeNative<boolean>('0xC715F730', vehicle, red.dataView, green.dataView, blue.dataView);
	return getVehicleXenonLightsCustomColor_result;
}