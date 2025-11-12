import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_INJURED
 *
 * 0x4FAFF4BCB7633475

 * 
 * This check should be used on a ped to determine if ped is able to do anything in the game ie run a task.
 * The game will assert if to you try to give an injured ped  a task. This command will return true if the ped is dead as well
 * The IS_ENTITY_DEAD command should be used only if you want to specifically know that the ped is dead. i.e. remove a blip, set the dead ped coords.
 * 
 * Gets a value indicating whether this ped's health is below its injured threshold.
 * 
 * The default threshold is 100.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInjured(ped: PedIndex): boolean {
	const isPedInjured_result = Citizen.invokeNative<boolean>('0x4FAFF4BCB7633475', ped);
	return isPedInjured_result;
}