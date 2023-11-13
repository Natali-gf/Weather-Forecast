import { Atmosphere, Clouds, Drizzle, Rain, Snow, Thunderstorm } from "../enum/weatherCodes";
import { IWeatherIcon } from "../interfaces/weatherIcon";

export const weatherIcons: IWeatherIcon = {
	[ Clouds.Clear ]: {
		dayIcon: 'src/assets/icons/sun.png',
		nightIcon: 'src/assets/icons/moon_stars.png',
	},
	[ Clouds.Few | Clouds.Scattered ]: {
		dayIcon: 'src/assets/icons/sun_cloud.png',
		nightIcon: 'src/assets/icons/moon_cloud.png',
	},
	[ Clouds.Broken | Clouds.Overcast ]: {
		dayIcon: 'src/assets/icons/cloud.png',
		nightIcon: 'src/assets/icons/cloud.png',
	},
	[ Atmosphere.Mist | Atmosphere.Smoke | Atmosphere.Haze ]: {
		dayIcon: 'src/assets/icons/cloud_slow_wind.png',
		nightIcon: 'src/assets/icons/cloud_slow_wind.png',
	},
	[ Atmosphere.DustWhirls | Atmosphere.Fog | Atmosphere.Sand |
	  Atmosphere.Dust | Atmosphere.VolcanicAsh ]: {
		dayIcon: 'src/assets/icons/cloud_fast_wind.png',
		nightIcon: 'src/assets/icons/cloud_fast_wind.png',
	},
	[ Atmosphere.Squalls ]: {
		dayIcon: 'src/assets/icons/fast_winds.png',
		nightIcon: 'src/assets/icons/fast_winds.png',
	},
	[ Atmosphere.Tornado ]: {
		dayIcon: 'src/assets/icons/tornado.png',
		nightIcon: 'src/assets/icons/tornado.png',
	},
	[ Snow.ShowerSleet | Snow.LightShowerSleet | Snow.LightRain | Snow.Rain ]: {
		dayIcon: 'src/assets/icons/sun_cloud_little_snow.png',
		nightIcon: 'src/assets/icons/moon_cloud_little_snow.png',
	},
	[ Snow.Light | Snow.LightShowerSnow | Snow.Medium ]: {
		dayIcon: 'src/assets/icons/sun_cloud_snow.png',
		nightIcon: 'src/assets/icons/moon_cloud_snow.png',
	},
	[ Snow.Heavy | Snow.HeavyShowerSnow | Snow.ShowerSnow ]: {
		dayIcon: 'src/assets/icons/cloud_mid_snow.png',
		nightIcon: 'src/assets/icons/cloud_mid_snow.png',
	},
	[ Rain.Freezing | Drizzle.ShowerRain | Drizzle.Shower ]: {
		dayIcon: 'src/assets/icons/sun_cloud_hailstone.png',
		nightIcon: 'src/assets/icons/moon_cloud_hailstone.png',
	},
	[ Rain.Light | Rain.LightShower |
	  Drizzle.LightDrizzle | Drizzle.Drizzle | Drizzle.LightDrizzleRain ]: {
		dayIcon: 'src/assets/icons/sun_cloud_little_rain.png',
		nightIcon: 'src/assets/icons/moon_cloud_little_rain.png',
	},
	[ Rain.Medium | Rain.Shower |
	  Drizzle.HeavyDrizzle | Drizzle.DrizzleRain | Drizzle.HeavyDrizzleRain ]: {
		dayIcon: 'src/assets/icons/sun_cloud_mid_rain.png',
		nightIcon: 'src/assets/icons/moon_cloud_mid_rain.png',
	},
	[ Rain.Heavy | Rain.HeavyShower ]: {
		dayIcon: 'src/assets/icons/sun_cloud_big_rain.png',
		nightIcon: 'src/assets/icons/moon_cloud_big_rain.png',
	},
	[ Rain.Extreme | Rain.VeryHeavy | Rain.RaggedShower | Drizzle.HeavyShowerRain ]: {
		dayIcon: 'src/assets/icons/sun_cloud_angled_rain.png',
		nightIcon: 'src/assets/icons/moon_cloud_angled_rain.png',
	},
	[ Thunderstorm.LightThunderstorm | Thunderstorm.LightRain |
	  Thunderstorm.LightDrizzle | Thunderstorm.Drizzle ]: {
		dayIcon: 'src/assets/icons/sun_cloud_zap.png',
		nightIcon: 'src/assets/icons/moon_cloud_zap.png',
	},
	[ Thunderstorm.Thunderstorm ]: {
		dayIcon: 'src/assets/icons/cloud_zap.png',
		nightIcon: 'src/assets/icons/cloud_zap.png',
	},
	[ Thunderstorm.HeavyThunderstorm ]: {
		dayIcon: 'src/assets/icons/cloud_3_zap.png',
		nightIcon: 'src/assets/icons/cloud_3_zap.png',
	},
	[ Thunderstorm.RaggedThunderstorm ]: {
		dayIcon: 'src/assets/icons/zaps.png',
		nightIcon: 'src/assets/icons/zaps.png',
	},
	[ Thunderstorm.HeavyRain | Thunderstorm.Rain | Thunderstorm.HeavyDrizzle ]: {
		dayIcon: 'src/assets/icons/cloud_angled_rain_zap.png',
		nightIcon: 'src/assets/icons/cloud_angled_rain_zap.png',
	},
}