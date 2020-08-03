Hero.destroy_all 
Power.destroy_all

power1 = Power.create(name: "Ice", description: "Turns everything to ice")
power2 = Power.create(name: "Fire", description: "Turns everything to fire")
power3 = Power.create(name: "Wind", description: "Turns everything to wind")

hero1 = Hero.create(name: "Hero 1", super_name: "Galaca", power_id: power1.id )
hero2 = Hero.create(name: "Hero 2", super_name: "Jalc", power_id: power2.id )
hero3 = Hero.create(name: "Hero 3", super_name: "Pesdt", power_id: power3.id )