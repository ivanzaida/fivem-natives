import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_COLOR_1_NAME
 *
 * 0x74CB4C4C883007E5

 * 
 * Returns a string which is the codename of the vehicle's currently selected primary color
 * 
 * p1 is always 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} spec
 * @returns {string}  
 */
export function getVehicleModColor_1Name(vehicle: VehicleIndex, spec: boolean): string {
	const getVehicleModColor_1Name_result = Citizen.invokeNative<string>('0x74CB4C4C883007E5', vehicle, spec);
	return getVehicleModColor_1Name_result;
}