import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_TORSO_REACT_IK
 *
 * 0xCCA22A4A1FC7433F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableIK
 */
export function setPedCanTorsoReactIk(ped: PedIndex, enableIK: boolean): void {
	const setPedCanTorsoReactIk_result = Citizen.invokeNative<void>('0xCCA22A4A1FC7433F', ped, enableIK);
	return setPedCanTorsoReactIk_result;
}