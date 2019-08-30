# Modules
require_relative "module_human"

module Animal
    def make_sound
        puts "Grrrr!"
    end
end

class Cat
    include Animal
end

botolo =  Cat.new
botolo.make_sound

class Scientist
    include Human
    prepend Smart

    def act_smart
        return "E = mc^2"
    end
end

einstein = Scientist.new
einstein.name = "Albert"
puts einstein.name
einstein.run
puts einstein.name + " says " + einstein.act_smart
