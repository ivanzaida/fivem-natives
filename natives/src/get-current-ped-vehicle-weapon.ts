import { PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * WEAPON:GET_CURRENT_PED_VEHICLE_WEAPON
 *
 * 0x51B462E1DEB9F762

 * 
 * Example in VB
 * 
 *     Public Shared Function GetVehicleCurrentWeapon(Ped As Ped) As Integer
 *         Dim arg As New OutputArgument()
 *         Native.Function.Call(Hash.GET_CURRENT_PED_VEHICLE_WEAPON, Ped, arg)
 *         Return arg.GetResult(Of Integer)()
 *     End Function
 * 
 * Usage:
 * If GetVehicleCurrentWeapon(Game.Player.Character) = -821520672 Then ...Do something
 * Note: -821520672 = VEHICLE_WEAPON_PLANE_ROCKET
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {IntRef} outWeaponType [Ref]
 * @returns {boolean}  
 */
export function getCurrentPedVehicleWeapon(ped: PedIndex, outWeaponType: IntRef /* ptr */): boolean {
	const getCurrentPedVehicleWeapon_result = Citizen.invokeNative<boolean>('0x51B462E1DEB9F762', ped, outWeaponType.dataView);
	return getCurrentPedVehicleWeapon_result;
}