import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MODEL_NUMBER_OF_SEATS
 *
 * 0xDC1AA2FE20EEB2E9

 * 
 * Returns max number of passengers (including the driver) for the specified vehicle model.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getVehicleModelNumberOfSeats(vehicleModelHashKey: ModelNames): number {
	const getVehicleModelNumberOfSeats_result = Citizen.invokeNative<number>('0xDC1AA2FE20EEB2E9', vehicleModelHashKey);
	return getVehicleModelNumberOfSeats_result;
}