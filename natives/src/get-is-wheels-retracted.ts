import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_WHEELS_RETRACTED
 *
 * 0x7F90FF957E7FF50A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsWheelsRetracted(vehicle: VehicleIndex): boolean {
	const getIsWheelsRetracted_result = Citizen.invokeNative<boolean>('0x7F90FF957E7FF50A', vehicle);
	return getIsWheelsRetracted_result;
}