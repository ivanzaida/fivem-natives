import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_SCRIPT_TASK_COMMAND
 *
 * 0X84FE084

 * Gets the script task command currently assigned to the ped.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @returns {number}  The script task command currently assigned to the ped. A value of 0x811E343C denotes no script task is assigned.
 */
export function getPedScriptTaskCommand(ped: PedIndex): number {
	const getPedScriptTaskCommand_result = Citizen.invokeNative<number>('0X84FE084', ped);
	return getPedScriptTaskCommand_result;
}