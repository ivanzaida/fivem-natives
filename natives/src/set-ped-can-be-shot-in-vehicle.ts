import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_SHOT_IN_VEHICLE
 *
 * 0x9C18DF7FC19D843C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} canBeShotInVehicleFlag
 */
export function setPedCanBeShotInVehicle(ped: PedIndex, canBeShotInVehicleFlag: boolean): void {
	const setPedCanBeShotInVehicle_result = Citizen.invokeNative<void>('0x9C18DF7FC19D843C', ped, canBeShotInVehicleFlag);
	return setPedCanBeShotInVehicle_result;
}