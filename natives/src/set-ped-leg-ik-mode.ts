import { PedIndex, ELegIkMode } from '@ivanzaida/structures'

/**
 * PED:SET_PED_LEG_IK_MODE
 *
 * 0xFC85193CBD98FD69

 * 
 * The default mode for non-player peds is LEG_IK_PARTIAL.
 * 
 * "IK" stands for "Inverse kinematics." I assume this has something to do with how the ped uses his legs to balance. In the scripts, the second parameter is always an int with a value of 2, 0, or sometimes 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ELegIkMode} legIkMode
 */
export function setPedLegIkMode(ped: PedIndex, legIkMode: ELegIkMode | number): void {
	const setPedLegIkMode_result = Citizen.invokeNative<void>('0xFC85193CBD98FD69', ped, legIkMode);
	return setPedLegIkMode_result;
}