import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_ON_ALL_WHEELS
 *
 * 0xD2A0543EC400E1A5

 * 
 * Public Function isVehicleOnAllWheels(vh As Vehicle) As Boolean
 *         Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_ON_ALL_WHEELS, vh)
 *     End Function
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleOnAllWheels(vehicle: VehicleIndex): boolean {
	const isVehicleOnAllWheels_result = Citizen.invokeNative<boolean>('0xD2A0543EC400E1A5', vehicle);
	return isVehicleOnAllWheels_result;
}