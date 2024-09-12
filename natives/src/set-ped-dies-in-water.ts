import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DIES_IN_WATER
 *
 * 0x34A9A872D3C510BF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} drownsInWaterFlag
 */
export function setPedDiesInWater(ped: PedIndex, drownsInWaterFlag: boolean): void {
	const setPedDiesInWater_result = Citizen.invokeNative<void>('0x34A9A872D3C510BF', ped, drownsInWaterFlag);
	return setPedDiesInWater_result;
}