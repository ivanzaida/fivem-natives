import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_ARE_BOMB_BAY_DOORS_OPEN
 *
 * 0x94F61A08FC26ECDF

 * 
 * Returns true when the bomb bay doors of this plane are open. False if they're closed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getAreBombBayDoorsOpen(vehicle: VehicleIndex): boolean {
	const getAreBombBayDoorsOpen_result = Citizen.invokeNative<boolean>('0x94F61A08FC26ECDF', vehicle);
	return getAreBombBayDoorsOpen_result;
}