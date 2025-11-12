import { PedIndex, ERagdollBlockingFlags } from '@ivanzaida/structures'

/**
 * PED:SET_RAGDOLL_BLOCKING_FLAGS
 *
 * 0x72B18C9612CF3DA0

 * 
 * Works for both player and peds,
 * 
 * enum eRagdollBlockingFlags
 * {
 *  RBF_BULLET_IMPACT = 0,
 *  RBF_VEHICLE_IMPACT = 1,
 *  RBF_FIRE = 2,
 *  RBF_ELECTROCUTION = 3,
 *  RBF_PLAYER_IMPACT = 4,
 *  RBF_EXPLOSION = 5,0
 *  RBF_IMPACT_OBJECT = 6,
 *  RBF_MELEE = 7,
 *  RBF_RUBBER_BULLET = 8,
 *  RBF_FALLING = 9,
 *  RBF_WATER_JET = 10,
 *  RBF_DROWNING = 11,
 *  _0x9F52E2C4 = 12,
 *  RBF_PLAYER_BUMP = 13,
 *  RBF_PLAYER_RAGDOLL_BUMP = 14,
 *  RBF_PED_RAGDOLL_BUMP = 15,
 *  RBF_VEHICLE_GRAB = 16,
 *  RBF_SMOKE_GRENADE = 17,
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ERagdollBlockingFlags} flags
 */
export function setRagdollBlockingFlags(ped: PedIndex, flags: ERagdollBlockingFlags | number = 1): void {
	const setRagdollBlockingFlags_result = Citizen.invokeNative<void>('0x72B18C9612CF3DA0', ped, flags);
	return setRagdollBlockingFlags_result;
}