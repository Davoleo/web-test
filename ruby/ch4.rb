# Modules
# Polymorphism

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

# --- Polymorphism ---
class Bird
    def tweet(bird_type)
        bird_type.tweet
    end
end

class Cardinal < Bird
    def tweet
        puts "Tweet Tweetter"
    end
end

class Parrot < Bird
    def tweet
        puts "Squawq"
    end
end

generic_bird = Bird.new
generic_bird.tweet(Cardinal.new)
generic_bird.tweet(Parrot.new)