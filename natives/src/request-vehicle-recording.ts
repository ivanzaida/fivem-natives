/**
 * VEHICLE:REQUEST_VEHICLE_RECORDING
 *
 * 0xD772E6694B8472A6

 * 
 * Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
 * For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" (e.g., in native GET_TOTAL_DURATION_OF_VEHICLE_RECORDING_ID) corresponds to a unique identifier within the recording streaming module.
 * Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} fileNumber
 * @param {string} recordingName
 */
export function requestVehicleRecording(fileNumber: number, recordingName: string): void {
	const requestVehicleRecording_result = Citizen.invokeNative<void>('0xD772E6694B8472A6', fileNumber, recordingName);
	return requestVehicleRecording_result;
}