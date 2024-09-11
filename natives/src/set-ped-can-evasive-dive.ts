import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_EVASIVE_DIVE
 *
 * 0x84D421ACEBF9E529

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} flag
 */
export function setPedCanEvasiveDive(ped: PedIndex, flag: boolean): void {
	const setPedCanEvasiveDive_result = Citizen.invokeNative<void>('0x84D421ACEBF9E529', ped, flag);
	return setPedCanEvasiveDive_result;
}