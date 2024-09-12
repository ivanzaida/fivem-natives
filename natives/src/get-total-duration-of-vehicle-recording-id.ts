import { RecordingId } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_TOTAL_DURATION_OF_VEHICLE_RECORDING_ID
 *
 * 0x1F921E74406AE806

 * 
 * ------------------------------------------------------------------
 * @param {RecordingId} index
 * @returns {number}  
 */
export function getTotalDurationOfVehicleRecordingId(index: RecordingId): number {
	const getTotalDurationOfVehicleRecordingId_result = Citizen.invokeNative<number>('0x1F921E74406AE806', index);
	return getTotalDurationOfVehicleRecordingId_result;
}