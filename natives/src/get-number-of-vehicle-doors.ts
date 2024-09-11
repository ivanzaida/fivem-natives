import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_NUMBER_OF_VEHICLE_DOORS
 *
 * 0x860632F4716956DF

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getNumberOfVehicleDoors(vehicle: VehicleIndex): number {
	const getNumberOfVehicleDoors_result = Citizen.invokeNative<number>('0x860632F4716956DF', vehicle);
	return getNumberOfVehicleDoors_result;
}