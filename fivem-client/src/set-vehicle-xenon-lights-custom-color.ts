import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR
 *
 * 0X1683E7F0

 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [_SET_VEHICLE_XENON_LIGHTS_COLOR](#_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @param {number} red Red color (0255).
 * @param {number} green Green color (0255).
 * @param {number} blue Blue color (0255).
 */
export function setVehicleXenonLightsCustomColor(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const setVehicleXenonLightsCustomColor_result = Citizen.invokeNative<void>('0X1683E7F0', vehicle, red, green, blue);
	return setVehicleXenonLightsCustomColor_result;
}