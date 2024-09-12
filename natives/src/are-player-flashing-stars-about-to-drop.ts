import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:ARE_PLAYER_FLASHING_STARS_ABOUT_TO_DROP
 *
 * 0xA2E55F2C91545EAD

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function arePlayerFlashingStarsAboutToDrop(player: PlayerIndex): boolean {
	const arePlayerFlashingStarsAboutToDrop_result = Citizen.invokeNative<boolean>('0xA2E55F2C91545EAD', player);
	return arePlayerFlashingStarsAboutToDrop_result;
}