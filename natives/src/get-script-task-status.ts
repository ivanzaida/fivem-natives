import { PedIndex, EScriptTaskName, EScripttaskstatus } from '@ivanzaida/structures'

/**
 * TASK:GET_SCRIPT_TASK_STATUS
 *
 * 0x9B5C1660CCDF7189

 * 
 * If TaskName is chosen to be NULL the command will search for any scripted task that is being processed, rather than a specific task.
 * ReturnStatusOut should be declared as a SCRIPTTASKSTATUS. ReturnStatusOut will be one of the entries in the header file:
 * If you're trying to get the status of a task that is performed as part of a sequence then it will never return as True because the character in question is told to TASK_PERFORM_SEQUENCE.
 * So, check for GET_SCRIPT_TASK_STATUS ( CharID, SCRIPT_TASK_PERFORM_SEQUENCE, ReturnStatus) instead.
 * Alternatively, you can check to see if a character is performing a sequence then use GET_SEQUENCE_PROGRESS to find out which specific task within the sequence your character is performing.
 * 
 * Gets the status of a script-assigned task.
 * taskHash: https://alloc8or.re/gta5/doc/enums/eScriptTaskHash.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EScriptTaskName} taskName
 * @returns {EScripttaskstatus}  
 */
export function getScriptTaskStatus(ped: PedIndex, taskName: EScriptTaskName | number): EScripttaskstatus {
	const getScriptTaskStatus_result = Citizen.invokeNative<EScripttaskstatus>('0x9B5C1660CCDF7189', ped, taskName);
	return getScriptTaskStatus_result;
}