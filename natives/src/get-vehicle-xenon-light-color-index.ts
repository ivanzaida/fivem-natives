import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_XENON_LIGHT_COLOR_INDEX
 *
 * 0xD6BA8C57BDF9DEB9

 * 
 * Returns the headlight color index from the vehicle. Value between 0, 12.
 * Use SET_VEHICLE_XENON_LIGHT_COLOR_INDEX to set the headlights color for the vehicle.
 * Must enable xenon headlights before it'll take affect.
 * 
 * Returns an int, value between 0-12 or 255 if no color is set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleXenonLightColorIndex(vehicle: VehicleIndex): number {
	const getVehicleXenonLightColorIndex_result = Citizen.invokeNative<number>('0xD6BA8C57BDF9DEB9', vehicle);
	return getVehicleXenonLightColorIndex_result;
}