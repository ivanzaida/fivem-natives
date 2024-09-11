import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_SWITCH_WEAPON
 *
 * 0xD724351CCF90F653

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowSwitch
 */
export function setPedCanSwitchWeapon(ped: PedIndex, allowSwitch: boolean): void {
	const setPedCanSwitchWeapon_result = Citizen.invokeNative<void>('0xD724351CCF90F653', ped, allowSwitch);
	return setPedCanSwitchWeapon_result;
}