import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_TARGETED_WHEN_INJURED
 *
 * 0x11FB2E1F7BAAB75A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowTargetWhenInjured
 */
export function setPedCanBeTargetedWhenInjured(ped: PedIndex, allowTargetWhenInjured: boolean): void {
	const setPedCanBeTargetedWhenInjured_result = Citizen.invokeNative<void>('0x11FB2E1F7BAAB75A', ped, allowTargetWhenInjured);
	return setPedCanBeTargetedWhenInjured_result;
}