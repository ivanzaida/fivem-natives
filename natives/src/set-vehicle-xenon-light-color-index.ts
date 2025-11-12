import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_XENON_LIGHT_COLOR_INDEX
 *
 * 0x89D1FDCA3735A1E0

 * 
 * `color`: is the paint index for the vehicle.
 * Paint index goes from 0 to 12.
 * Be aware that it only works on xenon lights. Example: https://i.imgur.com/yV3cpG9.png
 * Full list of all vehicle xenon lights by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} xenonColorLight
 */
export function setVehicleXenonLightColorIndex(vehicle: VehicleIndex, xenonColorLight: number): void {
	const setVehicleXenonLightColorIndex_result = Citizen.invokeNative<void>('0x89D1FDCA3735A1E0', vehicle, xenonColorLight);
	return setVehicleXenonLightColorIndex_result;
}