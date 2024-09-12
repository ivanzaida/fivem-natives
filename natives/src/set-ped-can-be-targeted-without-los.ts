import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_TARGETED_WITHOUT_LOS
 *
 * 0x89C101B2B73350C7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} targetWithoutLos
 */
export function setPedCanBeTargetedWithoutLos(ped: PedIndex, targetWithoutLos: boolean): void {
	const setPedCanBeTargetedWithoutLos_result = Citizen.invokeNative<void>('0x89C101B2B73350C7', ped, targetWithoutLos);
	return setPedCanBeTargetedWithoutLos_result;
}