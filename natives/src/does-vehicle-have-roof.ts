import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_VEHICLE_HAVE_ROOF
 *
 * 0x9DB4F102351D5D9E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function doesVehicleHaveRoof(vehicle: VehicleIndex): boolean {
	const doesVehicleHaveRoof_result = Citizen.invokeNative<boolean>('0x9DB4F102351D5D9E', vehicle);
	return doesVehicleHaveRoof_result;
}