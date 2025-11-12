import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:FORCE_PLAYBACK_RECORDED_VEHICLE_UPDATE
 *
 * 0x44A13535A15C20E0

 * 
 * Forces through a playback update of a vehicle recording, allowing this to be performed on the same game update that the request is made to start playback. This makes it easier to synchronise vehicle recordings with entity warping and scripted camera cuts.
 * 
 * Often called after START_PLAYBACK_RECORDED_VEHICLE and SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE; similar in use to FORCE_ENTITY_AI_AND_ANIMATION_UPDATE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} doPlaceOnRoadAdjustment
 */
export function forcePlaybackRecordedVehicleUpdate(vehicle: VehicleIndex, doPlaceOnRoadAdjustment: boolean = true): void {
	const forcePlaybackRecordedVehicleUpdate_result = Citizen.invokeNative<void>('0x44A13535A15C20E0', vehicle, doPlaceOnRoadAdjustment);
	return forcePlaybackRecordedVehicleUpdate_result;
}