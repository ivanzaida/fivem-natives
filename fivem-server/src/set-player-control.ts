import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PLAYER_CONTROL
 *
 * 0xD17AFCD8

 * 
 * This command can be used to temporarily disable the player’s controls. The controls should be switched back on again as soon as possible.
 * NOTE Turning this on will make vehicles proof from bullets etc. Likewise when the player controls are turned back on it will make ALL the vehicles vunerable again,
 * so you will have to set them back with SET_CAR_CAN_BE_DAMAGED(vehicle_name, FALSE).
 * 
 * Flags:
 * SPC_AMBIENT_SCRIPT = (1 << 1),
 * SPC_CLEAR_TASKS = (1 << 2),
 * SPC_REMOVE_FIRES = (1 << 3),
 * SPC_REMOVE_EXPLOSIONS = (1 << 4),
 * SPC_REMOVE_PROJECTILES = (1 << 5),
 * SPC_DEACTIVATE_GADGETS = (1 << 6),
 * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
 * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
 * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
 * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
 * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
 * SPC_ALLOW_PAD_SHAKE = (1 << 12)
 * 
 * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} bHasControl
 * @param {number} flags
 */
export function setPlayerControl(player: PlayerIndex, bHasControl: boolean, flags: number): void {
	const setPlayerControl_result = Citizen.invokeNative<void>('0xD17AFCD8', player, bHasControl, flags);
	return setPlayerControl_result;
}