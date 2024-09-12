import { ERandomPedModel } from '@ivanzaida/structures'

/**
 * PED:CAN_CREATE_RANDOM_PED
 *
 * 0x5E0FF86EB887D780

 * 
 * ------------------------------------------------------------------
 * @param {ERandomPedModel} pedModel
 * @returns {boolean}  
 */
export function canCreateRandomPed(pedModel: ERandomPedModel | number): boolean {
	const canCreateRandomPed_result = Citizen.invokeNative<boolean>('0x5E0FF86EB887D780', pedModel);
	return canCreateRandomPed_result;
}