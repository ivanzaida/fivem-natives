import { VehicleIndex, Vector3 } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_ENTRY_POINT_POSITION
 *
 * 0x7902AD09BBD23276

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} entryPoint
 * @returns {Vector3}  
 */
export function getEntryPointPosition(vehicle: VehicleIndex, entryPoint: number): Vector3 {
	const getEntryPointPosition_result = Citizen.invokeNative<Vector3>('0x7902AD09BBD23276', vehicle, entryPoint);
	return getEntryPointPosition_result;
}