import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_LAST_DRIVEN_VEHICLE
 *
 * 0x1D25F777D0165BF3

 * 
 * ------------------------------------------------------------------
 * @returns {VehicleIndex}  
 */
export function getLastDrivenVehicle(): VehicleIndex {
	const getLastDrivenVehicle_result = Citizen.invokeNative<VehicleIndex>('0x1D25F777D0165BF3', );
	return getLastDrivenVehicle_result;
}