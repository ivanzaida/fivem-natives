import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_RUNNING_MOBILE_PHONE_TASK
 *
 * 0x65815C3D3CB39062

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedRunningMobilePhoneTask(ped: PedIndex): boolean {
	const isPedRunningMobilePhoneTask_result = Citizen.invokeNative<boolean>('0x65815C3D3CB39062', ped);
	return isPedRunningMobilePhoneTask_result;
}