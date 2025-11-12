import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_CONTROLLED_VEHICLE_UNABLE_TO_GET_TO_ROAD
 *
 * 0x19B15B2D6C049166

 * 
 * Returns true if the vehicle controlled by the ped is currently unable to find a valid route to go back to road
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isControlledVehicleUnableToGetToRoad(ped: PedIndex): boolean {
	const isControlledVehicleUnableToGetToRoad_result = Citizen.invokeNative<boolean>('0x19B15B2D6C049166', ped);
	return isControlledVehicleUnableToGetToRoad_result;
}