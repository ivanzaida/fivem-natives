import { EPickupRewardType } from '@ivanzaida/structures'

/**
 * OBJECT:SUPPRESS_PICKUP_REWARD_TYPE
 *
 * 0xD346DC73B664C2EC

 * 
 * enum ePickupRewardType
 * {
 *     PICKUP_REWARD_TYPE_AMMO = (1 << 0),
 *     PICKUP_REWARD_TYPE_BULLET_MP = (1 << 1),
 *     PICKUP_REWARD_TYPE_MISSILE_MP = (1 << 2),
 *     PICKUP_REWARD_TYPE_GRENADE_LAUNCHER_MP = (1 << 3),
 *     PICKUP_REWARD_TYPE_ARMOUR = (1 << 4),
 *     PICKUP_REWARD_TYPE_HEALTH = (1 << 5),
 *     PICKUP_REWARD_TYPE_HEALTH_VARIABLE = PICKUP_REWARD_TYPE_HEALTH,
 *     PICKUP_REWARD_TYPE_MONEY_FIXED = (1 << 6),
 *     PICKUP_REWARD_TYPE_MONEY_VARIABLE = PICKUP_REWARD_TYPE_MONEY_FIXED,
 *     PICKUP_REWARD_TYPE_WEAPON = (1 << 7),
 *     PICKUP_REWARD_TYPE_STAT = (1 << 8),
 *     PICKUP_REWARD_TYPE_STAT_VARIABLE = PICKUP_REWARD_TYPE_STAT,
 *     PICKUP_REWARD_TYPE_VEHICLE_FIX = (1 << 9),
 *     PICKUP_REWARD_TYPE_FIREWORK_MP = (1 << 10),
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupRewardType} pickupFlag
 * @param {boolean} clearPreviousFlags Whether or not you want all previously set flags to be cleared before setting the new flag.
 */
export function suppressPickupRewardType(pickupFlag: EPickupRewardType | number, clearPreviousFlags: boolean = false): void {
	const suppressPickupRewardType_result = Citizen.invokeNative<void>('0xD346DC73B664C2EC', pickupFlag, clearPreviousFlags);
	return suppressPickupRewardType_result;
}