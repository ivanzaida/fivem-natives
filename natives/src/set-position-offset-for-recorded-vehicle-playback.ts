import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_POSITION_OFFSET_FOR_RECORDED_VEHICLE_PLAYBACK
 *
 * 0x6E859E04BDE20D6E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 */
export function setPositionOffsetForRecordedVehiclePlayback(vehicle: VehicleIndex, offsetX: number, offsetY: number, offsetZ: number): void {
	const setPositionOffsetForRecordedVehiclePlayback_result = Citizen.invokeNative<void>('0x6E859E04BDE20D6E', vehicle, offsetX, offsetY, offsetZ);
	return setPositionOffsetForRecordedVehiclePlayback_result;
}