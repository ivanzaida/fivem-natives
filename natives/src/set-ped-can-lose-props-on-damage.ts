import { PedIndex, EPropDamageFlags } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_LOSE_PROPS_ON_DAMAGE
 *
 * 0x6E544F5DBF10461B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} value
 * @param {EPropDamageFlags} flag
 */
export function setPedCanLosePropsOnDamage(ped: PedIndex, value: boolean, flag: EPropDamageFlags | number = 0): void {
	const setPedCanLosePropsOnDamage_result = Citizen.invokeNative<void>('0x6E544F5DBF10461B', ped, value, flag);
	return setPedCanLosePropsOnDamage_result;
}