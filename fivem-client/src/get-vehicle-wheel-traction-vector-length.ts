import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_TRACTION_VECTOR_LENGTH
 *
 * 0X3BCFEE14

 * Gets the traction vector length of a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  
 */
export function getVehicleWheelTractionVectorLength(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelTractionVectorLength_result = Citizen.invokeNative<number>('0X3BCFEE14', vehicle, wheelIndex);
	return getVehicleWheelTractionVectorLength_result;
}