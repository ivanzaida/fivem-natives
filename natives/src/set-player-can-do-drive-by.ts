import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_CAN_DO_DRIVE_BY
 *
 * 0x19AD76EC04A73800

 * 
 * Set whether this player should be able to do drive-bys.
 * 
 * "A drive-by is when a ped is aiming/shooting from vehicle. This includes middle finger taunts. By setting this value to false I confirm the player is unable to do all that. Tested on tick."
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} canDoDriveBy
 */
export function setPlayerCanDoDriveBy(player: PlayerIndex, canDoDriveBy: boolean): void {
	const setPlayerCanDoDriveBy_result = Citizen.invokeNative<void>('0x19AD76EC04A73800', player, canDoDriveBy);
	return setPlayerCanDoDriveBy_result;
}