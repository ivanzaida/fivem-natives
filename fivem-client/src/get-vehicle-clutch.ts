import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_CLUTCH
 *
 * 0X1DAD4583

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleClutch(vehicle: VehicleIndex): number {
	const getVehicleClutch_result = Citizen.invokeNative<number>('0X1DAD4583', vehicle);
	return getVehicleClutch_result;
}