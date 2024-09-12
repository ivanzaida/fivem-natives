import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_ALLOW_LOCKON_TO_PED_IF_FRIENDLY
 *
 * 0x7D2CC3BDBE189210

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} lockOn
 */
export function setAllowLockonToPedIfFriendly(ped: PedIndex, lockOn: boolean): void {
	const setAllowLockonToPedIfFriendly_result = Citizen.invokeNative<void>('0x7D2CC3BDBE189210', ped, lockOn);
	return setAllowLockonToPedIfFriendly_result;
}