import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ENVEFF_CPV_ADD
 *
 * 0xD9101AFF302E59F6

 * 
 * In agency_heist3b.c4, its like this 90% of the time:
 * 
 * PED::SET_PED_ENVEFF_CPV_ADD(ped, 0.099);
 * PED::SET_PED_ENVEFF_SCALE(ped, 1.0);
 * PED::SET_PED_ENVEFF_CPV_ADD(ped, 87, 81, 68);
 * PED::SET_ENABLE_PED_ENVEFF_SCALE(ped, 1);
 * 
 * and its like this 10% of the time:
 * 
 * PED::SET_PED_ENVEFF_CPV_ADD(ped, 0.2);
 * PED::SET_PED_ENVEFF_SCALE(ped, 0.65);
 * PED::SET_PED_ENVEFF_COLOR_MODULATOR(ped, 74, 69, 60);
 * PED::SET_ENABLE_PED_ENVEFF_SCALE(ped, 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} cpvAdd
 */
export function setPedEnveffCpvAdd(ped: PedIndex, cpvAdd: number): void {
	const setPedEnveffCpvAdd_result = Citizen.invokeNative<void>('0xD9101AFF302E59F6', ped, cpvAdd);
	return setPedEnveffCpvAdd_result;
}