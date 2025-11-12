import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_POSITION_IN_RECORDING
 *
 * 0x942B90900E176BD7

 * 
 * Distance traveled in the vehicles current recording.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getPositionInRecording(vehicle: VehicleIndex): number {
	const getPositionInRecording_result = Citizen.invokeNative<number>('0x942B90900E176BD7', vehicle);
	return getPositionInRecording_result;
}