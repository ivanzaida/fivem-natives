import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_TORSO_VEHICLE_IK
 *
 * 0xD6AD3D0B48A10776

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableIK
 */
export function setPedCanTorsoVehicleIk(ped: PedIndex, enableIK: boolean): void {
	const setPedCanTorsoVehicleIk_result = Citizen.invokeNative<void>('0xD6AD3D0B48A10776', ped, enableIK);
	return setPedCanTorsoVehicleIk_result;
}