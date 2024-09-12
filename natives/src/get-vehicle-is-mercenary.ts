import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_IS_MERCENARY
 *
 * 0x97CDBE6B72277F6A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleIsMercenary(vehicle: VehicleIndex): boolean {
	const getVehicleIsMercenary_result = Citizen.invokeNative<boolean>('0x97CDBE6B72277F6A', vehicle);
	return getVehicleIsMercenary_result;
}