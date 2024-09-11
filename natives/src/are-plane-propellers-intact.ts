import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ARE_PLANE_PROPELLERS_INTACT
 *
 * 0x7C1AFBB397B1066E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function arePlanePropellersIntact(vehicle: VehicleIndex): boolean {
	const arePlanePropellersIntact_result = Citizen.invokeNative<boolean>('0x7C1AFBB397B1066E', vehicle);
	return arePlanePropellersIntact_result;
}