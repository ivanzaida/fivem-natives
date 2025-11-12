/**
 * VEHICLE:HAS_VEHICLE_RECORDING_BEEN_LOADED
 *
 * 0x266D9DB5FCE4003B

 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} fileNumber
 * @param {string} recordingName
 * @returns {boolean}  
 */
export function hasVehicleRecordingBeenLoaded(fileNumber: number, recordingName: string): boolean {
	const hasVehicleRecordingBeenLoaded_result = Citizen.invokeNative<boolean>('0x266D9DB5FCE4003B', fileNumber, recordingName);
	return hasVehicleRecordingBeenLoaded_result;
}