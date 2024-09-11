export enum EPickupRewardType {
	None,
	Ammo, // 1<<0
	BulletMp, // 1<<1
	MissileMp = 4, // 1<<2
	GrenadeLauncherMp = 8, // 1<<3
	Armour = 16, // 1<<4
	Health = 32, // 1<<5
	Money = 64, // 1<<6
	Weapon = 128, // 1<<7
	Stat = 256, // 1<<8
	VehicleFix = 512, // 1<<9
	FireworkMp = 1024, // 1<<10
	All = 2047, // 1<<11 - 1
}