import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:DOES_CONTEXT_EXIST_FOR_THIS_PED
 *
 * 0x8A6F4A122DEA1DA7

 * 
 * Checks if the context exists for the ped, searching through the voices in its PedVoiceGroup.  The final argument
 * can be set to true to allow searching in backup PVGs
 * 
 * Checks if the ped can play the speech or has the speech file, p2 is usually false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} context
 * @param {boolean} allowBackupPVG
 * @returns {boolean}  
 */
export function doesContextExistForThisPed(ped: PedIndex, context: string, allowBackupPVG: boolean = false): boolean {
	const doesContextExistForThisPed_result = Citizen.invokeNative<boolean>('0x8A6F4A122DEA1DA7', ped, context, allowBackupPVG);
	return doesContextExistForThisPed_result;
}