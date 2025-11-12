import { Vector3 } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_ROTATION_OF_VEHICLE_RECORDING_AT_TIME
 *
 * 0x083DB438E821B084

 * 
 * This native does no interpolation between pathpoints. The same rotation will be returned for all times up to the next pathpoint in the recording.
 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} recordingNumber
 * @param {number} time
 * @param {string} recordingName
 * @returns {Vector3}  
 */
export function getRotationOfVehicleRecordingAtTime(recordingNumber: number, time: number, recordingName: string): Vector3 {
	const getRotationOfVehicleRecordingAtTime_result = Citizen.invokeNative<Vector3>('0x083DB438E821B084', recordingNumber, time, recordingName);
	return getRotationOfVehicleRecordingAtTime_result;
}