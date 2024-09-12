import { BwYatchAttack } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_YATCHATTACK
 *
 * 0x9CEB2AC24E291FE5

 * 
 * ------------------------------------------------------------------
 * @param {BwYatchAttack} data [Ref]
 */
export function playstatsBwYatchattack(data: BwYatchAttack /* ptr */): void {
	const playstatsBwYatchattack_result = Citizen.invokeNative<void>('0x9CEB2AC24E291FE5', data.dataView);
	return playstatsBwYatchattack_result;
}