import { PedIndex, ESwitchFlags, ESwitchType } from '@ivanzaida/structures'

/**
 * STREAMING:START_PLAYER_SWITCH
 *
 * 0x8DD44A3F0D8EBD63

 * starts player switch
 * // this enum comes directly from R so don't edit this
 * enum ePlayerSwitchTypes
 * {
 *   SWITCH_TYPE_AUTO,
 *  SWITCH_TYPE_LONG,
 *  SWITCH_TYPE_MEDIUM,
 *    SWITCH_TYPE_SHORT
 * };
 * Use GET_IDEAL_PLAYER_SWITCH_TYPE for the best switch type.
 * ----------------------------------------------------
 * Examples from the decompiled scripts:
 * STREAMING::START_PLAYER_SWITCH(l_832._f3, PLAYER::PLAYER_PED_ID(), 0, 3);
 * STREAMING::START_PLAYER_SWITCH(l_832._f3, PLAYER::PLAYER_PED_ID(), 2050, 3);
 * STREAMING::START_PLAYER_SWITCH(PLAYER::PLAYER_PED_ID(), l_832._f3, 1024, 3);
 * STREAMING::START_PLAYER_SWITCH(g_141F27, PLAYER::PLAYER_PED_ID(), 513, v_14);
 * Note: DO NOT, use SWITCH_TYPE_LONG with flag 513. It leaves you stuck in the clouds. You'll have to call STOP_PLAYER_SWITCH() to return to your ped.
 * Flag 8 w/ SWITCH_TYPE_LONG will zoom out 3 steps, then zoom in 2/3 steps and stop on the 3rd and just hang there.
 * Flag 8 w/ SWITCH_TYPE_MEDIUM will zoom out 1 step, and just hang there.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} oldPed
 * @param {PedIndex} newPedindex
 * @param {ESwitchFlags} flags
 * @param {ESwitchType} type
 */
export function startPlayerSwitch(oldPed: PedIndex, newPedindex: PedIndex, flags: ESwitchFlags | number, type: ESwitchType | number = 0): void {
	const startPlayerSwitch_result = Citizen.invokeNative<void>('0x8DD44A3F0D8EBD63', oldPed, newPedindex, flags, type);
	return startPlayerSwitch_result;
}