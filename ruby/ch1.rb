# Hello World
# Data output and input
# Data casts
# Arithmetic

# Example Comment

# prints data on the monitor (WITH NEW LINE)
puts "Hello World!"

# prints data on the monitor (NO NEW LINE)
print "Enter a Value..."

# Conventional variable naming format
first_num = gets.to_i
# Gets an input and converts it to an integer ^

print "Enter Another Value..."
second_num = gets.to_i

# to_s converts something to a String
puts first_num.to_s + " + " + second_num.to_s + " = " + (first_num + second_num).to_s
puts "--------------------------"

# Arithmetic Operators
puts "6 + 4 " + (6 + 4).to_s
puts "6 - 4 " + (6 - 4).to_s
puts "6 * 4 " + (6 * 4).to_s
puts "6 / 4 " + (6 / 4).to_s
puts "6 % 4 " + (6 % 4).to_s
puts "--------------------------"

num_one = 1.000
num99 = 0.999

#Float accuracy to the fourteenth digit
puts num_one.to_s + " - " + num99.to_s + " = " + (num_one - num99).to_s
puts "----------------------------"

puts 1.class
puts 1.234.class
puts "string".class
puts "----------------------------"

# Constants start with an uppercase letter
EXAMPLE_CONSTANT = 3.14
# still allows to change constants, but it will output an error
EXAMPLE_CONSTANT = 1.6

puts EXAMPLE_CONSTANT

