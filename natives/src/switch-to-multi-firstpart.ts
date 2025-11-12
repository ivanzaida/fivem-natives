import { PedIndex, ESwitchFlags, ESwitchType } from '@ivanzaida/structures'

/**
 * STREAMING:SWITCH_TO_MULTI_FIRSTPART
 *
 * 0x6DECE5EA21E009F8

 * 
 * starts the ascent and hold part of the player switch (when going from SP to MP)
 * 
 * doesn't act normally when used on mount chilliad
 * Flags is a bitflag:
 * 2^n - Enabled Functionality:
 * 0 - Skip camera rotate up
 * 3 - Wait for SET_PLAYER_SWITCH_ESTABLISHING_SHOT / hang at last step. You will still need to run 0x74DE2E8739086740 to exit "properly" and then STOP_PLAYER_SWITCH
 * 6 - Invert Switch Direction (false = out, true = in)
 * 8 - Hang above ped
 * 
 * switchType: 0 - 3
 * 0: 1 step towards ped
 * 1: 3 steps out from ped
 * 2: 1 step out from ped
 * 3: 1 step towards ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} oldPed
 * @param {ESwitchFlags} flags
 * @param {ESwitchType} type
 */
export function switchToMultiFirstpart(oldPed: PedIndex, flags: ESwitchFlags | number, type: ESwitchType | number = 1): void {
	const switchToMultiFirstpart_result = Citizen.invokeNative<void>('0x6DECE5EA21E009F8', oldPed, flags, type);
	return switchToMultiFirstpart_result;
}