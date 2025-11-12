import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_A_CONVERTIBLE
 *
 * 0x7943BD10E2A03FAC

 * 
 * Returns true if the vehicle has a convertible roof.
 * 
 * p1 is false almost always. However, in launcher_carwash/carwash1/carwash2 scripts, p1 is true and is accompanied by DOES_VEHICLE_HAVE_ROOF. If p1 is true, it seems that every single vehicle will return true irrespective of being a convertible.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} checkRoofExtras
 * @returns {boolean}  
 */
export function isVehicleAConvertible(vehicle: VehicleIndex, checkRoofExtras: boolean = false): boolean {
	const isVehicleAConvertible_result = Citizen.invokeNative<boolean>('0x7943BD10E2A03FAC', vehicle, checkRoofExtras);
	return isVehicleAConvertible_result;
}