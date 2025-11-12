/**
 * VEHICLE:GET_TOTAL_DURATION_OF_VEHICLE_RECORDING
 *
 * 0xE2E30D829A6B8F9E

 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} recordingNumber
 * @param {string} recordingName
 * @returns {number}  
 */
export function getTotalDurationOfVehicleRecording(recordingNumber: number, recordingName: string): number {
	const getTotalDurationOfVehicleRecording_result = Citizen.invokeNative<number>('0xE2E30D829A6B8F9E', recordingNumber, recordingName);
	return getTotalDurationOfVehicleRecording_result;
}