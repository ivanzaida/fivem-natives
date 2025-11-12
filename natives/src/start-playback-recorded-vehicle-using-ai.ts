import { VehicleIndex, EDrivingmode } from '@ivanzaida/structures'

/**
 * VEHICLE:START_PLAYBACK_RECORDED_VEHICLE_USING_AI
 *
 * 0x3EF00C934572535B

 * 
 * The veghicle wil try and
 * 
 * AI abides by the provided driving style (e.g., stopping at red lights or waiting behind traffic) while executing the specificed vehicle recording.
 * 
 * FORCE_PLAYBACK_RECORDED_VEHICLE_UPDATE is a related native that deals with the AI physics for such recordings.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} fileNumber
 * @param {string} recordingName
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 */
export function startPlaybackRecordedVehicleUsingAi(vehicle: VehicleIndex, fileNumber: number, recordingName: string, cruiseSpeed: number = 10, mode: EDrivingmode | number = 786603): void {
	const startPlaybackRecordedVehicleUsingAi_result = Citizen.invokeNative<void>('0x3EF00C934572535B', vehicle, fileNumber, recordingName, cruiseSpeed, mode);
	return startPlaybackRecordedVehicleUsingAi_result;
}