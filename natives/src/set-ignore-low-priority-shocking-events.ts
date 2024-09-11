import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_IGNORE_LOW_PRIORITY_SHOCKING_EVENTS
 *
 * 0x50402A290336E9AF

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} ignoreEvents
 */
export function setIgnoreLowPriorityShockingEvents(player: PlayerIndex, ignoreEvents: boolean): void {
	const setIgnoreLowPriorityShockingEvents_result = Citizen.invokeNative<void>('0x50402A290336E9AF', player, ignoreEvents);
	return setIgnoreLowPriorityShockingEvents_result;
}