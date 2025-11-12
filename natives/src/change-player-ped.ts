import { PlayerIndex, PedIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CHANGE_PLAYER_PED
 *
 * 0x43892D65E9AE6F1B

 * 
 * Changes the player from one Ped to another.
 * After this command is called the players PED_INDEX will change to that of newPed.
 * The old player ped will be left with the same PED_INDEX as the player had previously.
 * The old player ped will be left as an AI mission character and it is up to the scripts to clean the old ped up using the players old PED_INDEX
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {PedIndex} newPed
 * @param {boolean} keepScriptedTasks
 * @param {boolean} clearPedDamage
 */
export function changePlayerPed(player: PlayerIndex, newPed: PedIndex, keepScriptedTasks: boolean = false, clearPedDamage: boolean = true): void {
	const changePlayerPed_result = Citizen.invokeNative<void>('0x43892D65E9AE6F1B', player, newPed, keepScriptedTasks, clearPedDamage);
	return changePlayerPed_result;
}