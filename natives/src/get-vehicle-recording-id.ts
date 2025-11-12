import { RecordingId } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_RECORDING_ID
 *
 * 0x95610E68DFCFC225

 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} fileNumber
 * @param {string} recordingName
 * @returns {RecordingId}  
 */
export function getVehicleRecordingId(fileNumber: number, recordingName: string): RecordingId {
	const getVehicleRecordingId_result = Citizen.invokeNative<RecordingId>('0x95610E68DFCFC225', fileNumber, recordingName);
	return getVehicleRecordingId_result;
}