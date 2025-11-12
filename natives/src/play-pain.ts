import { PedIndex, EAudDamageReason } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_PAIN
 *
 * 0xEBA2204AAD092B47

 * 
 * Needs another parameter [int p2]. The signature is PED::PLAY_PAIN(Ped ped, int painID, int p1, int p2);
 * 
 * Last 2 parameters always seem to be 0.
 * 
 * EX: Function.Call(Hash.PLAY_PAIN, TestPed, 6, 0, 0);
 * 
 * Known Pain IDs
 * ________________________
 * 
 * 1 - Doesn't seem to do anything. Does NOT crash the game like previously said. (Latest patch)
 * 6 - Scream (Short)
 * 7 - Scared Scream (Kinda Long)
 * 8 - On Fire
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAudDamageReason} damageReason
 * @param {number} rawDamage Damage value (usually won't be needed)
 * @param {boolean} syncOverNetwork Indicates whether this should automatically play on a locally controlled ped on remote machines
 */
export function playPain(ped: PedIndex, damageReason: EAudDamageReason | number, rawDamage: number = 0, syncOverNetwork: boolean = false): void {
	const playPain_result = Citizen.invokeNative<void>('0xEBA2204AAD092B47', ped, damageReason, rawDamage, syncOverNetwork);
	return playPain_result;
}