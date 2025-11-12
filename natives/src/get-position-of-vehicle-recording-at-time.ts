import { Vector3 } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_POSITION_OF_VEHICLE_RECORDING_AT_TIME
 *
 * 0x2A03585144C38A2A

 * 
 * This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.
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
export function getPositionOfVehicleRecordingAtTime(recordingNumber: number, time: number, recordingName: string): Vector3 {
	const getPositionOfVehicleRecordingAtTime_result = Citizen.invokeNative<Vector3>('0x2A03585144C38A2A', recordingNumber, time, recordingName);
	return getPositionOfVehicleRecordingAtTime_result;
}