import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_TIME_POSITION_IN_RECORDING
 *
 * 0x157F3D5A4AAB2C50

 * 
 * Can be used with GET_TOTAL_DURATION_OF_VEHICLE_RECORDING{_ID} to compute a percentage.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getTimePositionInRecording(vehicle: VehicleIndex): number {
	const getTimePositionInRecording_result = Citizen.invokeNative<number>('0x157F3D5A4AAB2C50', vehicle);
	return getTimePositionInRecording_result;
}