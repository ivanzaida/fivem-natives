import { PedIndex, EPhoneMode } from '@ivanzaida/structures'

/**
 * TASK:TASK_USE_MOBILE_PHONE
 *
 * 0x0974B2530CABDF56

 * 
 * when called with FALSE, this command cannot be used in a sequence.
 * If you want to use this as part of an AI sequence, consider using TASK_USE_MOBILE_PHONE_TIMED.
 * 
 * Actually has 3 params, not 2.
 * 
 * p0: Ped
 * p1: int (or bool?)
 * p2: int
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} usePhone
 * @param {EPhoneMode} phoneMode
 */
export function taskUseMobilePhone(ped: PedIndex, usePhone: boolean, phoneMode: EPhoneMode | number = 1): void {
	const taskUseMobilePhone_result = Citizen.invokeNative<void>('0x0974B2530CABDF56', ped, usePhone, phoneMode);
	return taskUseMobilePhone_result;
}