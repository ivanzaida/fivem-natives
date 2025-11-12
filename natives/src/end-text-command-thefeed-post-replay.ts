import { EFeedReplayType } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_REPLAY
 *
 * 0xBB8346AD199D9F61

 * 
 * returns a notification handle, prints out a notification like below:
 * type range: 0 - 2
 * if you set type to 1, image goes from 0 - 39 - Xbox you can add text to
 * 
 * example:
 * HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1, 20, "Who you trynna get crazy with, ese? Don't you know I'm LOCO?!");
 * - https://imgur.com/lGBPCz3
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EFeedReplayType} replayType
 * @param {number} icon
 * @param {string} subtitle
 * @returns {number}  
 */
export function endTextCommandThefeedPostReplay(replayType: EFeedReplayType | number, icon: number, subtitle: string): number {
	const endTextCommandThefeedPostReplay_result = Citizen.invokeNative<number>('0xBB8346AD199D9F61', replayType, icon, subtitle);
	return endTextCommandThefeedPostReplay_result;
}