/**
 * PLAYER:GIVE_ACHIEVEMENT_TO_PLAYER
 *
 * 0x584E143398F9661C

 * 1 - Welcome to Los Santos
 * 2 - A Friendship Resurrected
 * 3 - A Fair Day's Pay
 * 4 - The Moment of Truth
 * 5 - To Live or Die in Los Santos
 * 6 - Diamond Hard
 * 7 - Subversive
 * 8 - Blitzed
 * 9 - Small Town, Big Job
 * 10 - The Government Gimps
 * 11 - The Big One!
 * 12 - Solid Gold, Baby!
 * 13 - Career Criminal
 * 14 - San Andreas Sightseer
 * 15 - All's Fare in Love and War
 * 16 - TP Industries Arms Race
 * 17 - Multi-Disciplined
 * 18 - From Beyond the Stars
 * 19 - A Mystery, Solved
 * 20 - Waste Management
 * 21 - Red Mist
 * 22 - Show Off
 * 23 - Kifflom!
 * 24 - Three Man Army
 * 25 - Out of Your Depth
 * 26 - Altruist Acolyte
 * 27 - A Lot of Cheddar
 * 28 - Trading Pure Alpha
 * 29 - Pimp My Sidearm
 * 30 - Wanted: Alive Or Alive
 * 31 - Los Santos Customs
 * 32 - Close Shave
 * 33 - Off the Plane
 * 34 - Three-Bit Gangster
 * 35 - Making Moves
 * 36 - Above the Law
 * 37 - Numero Uno
 * 38 - The Midnight Club
 * 39 - Unnatural Selection
 * 40 - Backseat Driver
 * 41 - Run Like The Wind
 * 42 - Clean Sweep
 * 43 - Decorated
 * 44 - Stick Up Kid
 * 45 - Enjoy Your Stay
 * 46 - Crew Cut
 * 47 - Full Refund
 * 48 - Dialling Digits
 * 49 - American Dream
 * 50 - A New Perspective
 * 51 - Be Prepared
 * 52 - In the Name of Science
 * 53 - Dead Presidents
 * 54 - Parole Day
 * 55 - Shot Caller
 * 56 - Four Way
 * 57 - Live a Little
 * 58 - Can't Touch This
 * 59 - Mastermind
 * 60 - Vinewood Visionary
 * 61 - Majestic
 * 62 - Humans of Los Santos
 * 63 - First Time Director
 * 64 - Animal Lover
 * 65 - Ensemble Piece
 * 66 - Cult Movie
 * 67 - Location Scout
 * 68 - Method Actor
 * 69 - Cryptozoologist
 * 70 - Getting Started
 * 71 - The Data Breaches
 * 72 - The Bogdan Problem
 * 73 - The Doomsday Scenario
 * 74 - A World Worth Saving
 * 75 - Orbital Obliteration
 * 76 - Elitist
 * 77 - Masterminds
 * 
 * ------------------------------------------------------------------
 * @param {number} achievementId
 * @returns {boolean}  
 */
export function giveAchievementToPlayer(achievementId: number): boolean {
	const giveAchievementToPlayer_result = Citizen.invokeNative<boolean>('0x584E143398F9661C', achievementId);
	return giveAchievementToPlayer_result;
}