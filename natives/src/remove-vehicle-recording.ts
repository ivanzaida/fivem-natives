/**
 * VEHICLE:REMOVE_VEHICLE_RECORDING
 *
 * 0x7821F942CAEEBEE1

 * 
 * t can be used to get rid of car recordings that were streamed in but ended up not being used because of skipping a cutscene or the actions of the player.
 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} fileNumber
 * @param {string} recordingName
 */
export function removeVehicleRecording(fileNumber: number, recordingName: string): void {
	const removeVehicleRecording_result = Citizen.invokeNative<void>('0x7821F942CAEEBEE1', fileNumber, recordingName);
	return removeVehicleRecording_result;
}