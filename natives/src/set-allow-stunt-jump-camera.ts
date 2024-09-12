import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_ALLOW_STUNT_JUMP_CAMERA
 *
 * 0xE7D55A9EFD3E9475

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 */
export function setAllowStuntJumpCamera(ped: PedIndex, enable: boolean): void {
	const setAllowStuntJumpCamera_result = Citizen.invokeNative<void>('0xE7D55A9EFD3E9475', ped, enable);
	return setAllowStuntJumpCamera_result;
}