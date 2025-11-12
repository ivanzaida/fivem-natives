import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_PED_RINGTONE
 *
 * 0x1BC60757AC20ACCF

 * 
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/RFb4GTny
 * 
 * AUDIO::PLAY_PED_RINGTONE("Remote_Ring", PLAYER::PLAYER_PED_ID(), 1);
 * AUDIO::PLAY_PED_RINGTONE("Dial_and_Remote_Ring", PLAYER::PLAYER_PED_ID(), 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} soundName
 * @param {EntityIndex} ped
 * @param {boolean} triggerAsHudSound
 */
export function playPedRingtone(soundName: string, ped: EntityIndex, triggerAsHudSound: boolean): void {
	const playPedRingtone_result = Citizen.invokeNative<void>('0x1BC60757AC20ACCF', soundName, ped, triggerAsHudSound);
	return playPedRingtone_result;
}