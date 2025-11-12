import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_PLAY_IN_CAR_IDLES
 *
 * 0xDBD50CFC0081C308

 * 
 * Toggles config flag CPED_CONFIG_FLAG_CanPlayInCarIdles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} val
 */
export function setPedCanPlayInCarIdles(ped: PedIndex, val: boolean): void {
	const setPedCanPlayInCarIdles_result = Citizen.invokeNative<void>('0xDBD50CFC0081C308', ped, val);
	return setPedCanPlayInCarIdles_result;
}