import { RecordingId, Vector3 } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_ROTATION_OF_VEHICLE_RECORDING_ID_AT_TIME
 *
 * 0x32D675332B7BEAC5

 * 
 * Allows access to the rotation of the vehicle in a recording at a given point in time
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RecordingId} index
 * @param {number} time
 * @returns {Vector3}  
 */
export function getRotationOfVehicleRecordingIdAtTime(index: RecordingId, time: number): Vector3 {
	const getRotationOfVehicleRecordingIdAtTime_result = Citizen.invokeNative<Vector3>('0x32D675332B7BEAC5', index, time);
	return getRotationOfVehicleRecordingIdAtTime_result;
}