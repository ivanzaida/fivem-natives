import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_IN_BURNOUT
 *
 * 0x379AF4B11FE63CAF

 * 
 * Returns whether the specified vehicle is currently in a burnout.
 * 
 * 
 * vb.net
 * Public Function isVehicleInBurnout(vh As Vehicle) As Boolean
 *         Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_IN_BURNOUT, vh)
 *     End Function
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleInBurnout(vehicle: VehicleIndex): boolean {
	const isVehicleInBurnout_result = Citizen.invokeNative<boolean>('0x379AF4B11FE63CAF', vehicle);
	return isVehicleInBurnout_result;
}