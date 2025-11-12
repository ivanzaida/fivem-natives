import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:START_PLAYBACK_RECORDED_VEHICLE
 *
 * 0x88556DA0593A0748

 * 
 * This will start the engine automatically, to control this use START_PLAYBACK_RECORDED_VEHICLE_WITH_FLAGS
 * 
 * p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).
 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} fileNumber
 * @param {string} recordingName
 * @param {boolean} doPlaceOnRoadAdjustment
 */
export function startPlaybackRecordedVehicle(vehicle: VehicleIndex, fileNumber: number, recordingName: string, doPlaceOnRoadAdjustment: boolean = true): void {
	const startPlaybackRecordedVehicle_result = Citizen.invokeNative<void>('0x88556DA0593A0748', vehicle, fileNumber, recordingName, doPlaceOnRoadAdjustment);
	return startPlaybackRecordedVehicle_result;
}