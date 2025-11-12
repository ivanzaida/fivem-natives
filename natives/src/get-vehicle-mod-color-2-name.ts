import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_COLOR_2_NAME
 *
 * 0x598200EB0DCC8A9D

 * 
 * Returns a string which is the codename of the vehicle's currently selected secondary color
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {string}  
 */
export function getVehicleModColor_2Name(vehicle: VehicleIndex): string {
	const getVehicleModColor_2Name_result = Citizen.invokeNative<string>('0x598200EB0DCC8A9D', vehicle);
	return getVehicleModColor_2Name_result;
}